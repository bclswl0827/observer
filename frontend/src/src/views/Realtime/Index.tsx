import { Component } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Content from "../../components/Content";
import Navbar from "../../components/Navbar";
import View from "../../components/View";
import Scroller from "../../components/Scroller";
import Banner, { BannerProps } from "../../components/Banner";
import Footer from "../../components/Footer";
import Area, { AreaProps } from "../../components/Area";
import Container from "../../components/Container";
import Chart, { ChartProps } from "../../components/Chart";
import requestByTag from "../../helpers/requestByTag";
import setADC from "./setADC";
import setGeophone from "./setGeophone";
import websocketByTag from "../../helpers/websocketByTag";
import toast, { Toaster } from "react-hot-toast";
import setBanner from "./setBanner";
import setAreas from "./setAreas";
import { Geophone } from "../../config/geophone";
import { ADC } from "../../config/adc";
import { IntensityScaleStandard } from "../../helpers/getIntensity";
import getLocalStorage from "../../helpers/getLocalStorage";
import GLOBAL_CONFIG from "../../config/global";

// 180s by default
const QUENE_LENGTH = 180;

export interface RealtimeArea {
    readonly tag: string;
    readonly area: AreaProps;
    readonly chart: ChartProps;
}

interface State {
    readonly adc: ADC;
    readonly banner: BannerProps;
    readonly areas: RealtimeArea[];
    readonly geophone: Geophone;
    readonly scale: IntensityScaleStandard | "";
}

export default class Realtime extends Component<{}, State> {
    prevTs: number;
    websocket: WebSocket | null;
    constructor(props: {}) {
        super(props);
        this.state = {
            scale: "",
            banner: {
                type: "warning",
                label: "正在连接服务器",
                text: "请稍等...",
            },
            areas: [
                {
                    tag: "ehz",
                    area: {
                        label: "EHZ 通道加速度",
                        text: "PGA：正在获取中\nPGV：正在获取中\n震度：正在获取中",
                    },
                    chart: {
                        backgroundColor: "#d97706",
                        lineWidth: 1,
                        height: 300,
                        series: {
                            name: "EHZ",
                            type: "line",
                            color: "#fff",
                            data: [],
                        },
                    },
                },
                {
                    tag: "ehe",
                    area: {
                        label: "EHE 通道加速度",
                        text: "PGA：正在获取中\nPGV：正在获取中\n震度：正在获取中",
                    },
                    chart: {
                        backgroundColor: "#10b981",
                        lineWidth: 1,
                        height: 300,
                        series: {
                            name: "EHE",
                            type: "line",
                            color: "#fff",
                            data: [],
                        },
                    },
                },
                {
                    tag: "ehn",
                    area: {
                        label: "EHN 通道加速度",
                        text: "PGA：正在获取中\nPGV：正在获取中\n震度：正在获取中",
                    },
                    chart: {
                        backgroundColor: "#0ea5e9",
                        lineWidth: 1,
                        height: 300,
                        series: {
                            name: "EHN",
                            type: "line",
                            color: "#fff",
                            data: [],
                        },
                    },
                },
            ],
            geophone: {
                ehz: 0.288,
                ehe: 0.288,
                ehn: 0.288,
            },
            adc: {
                fullscale: 5,
                resolution: 24,
            },
        };
        this.prevTs = 0;
        this.websocket = null;
    }

    handleWebsocketOpen = (): void => {
        setTimeout(() => {
            toast.success("Websocket 连线已经建立");
        }, 500);
    };

    handleWebsocketData = (event: MessageEvent): void => {
        const { adc, geophone, scale } = this.state;
        const jsonData = JSON.parse(event.data);
        const banner = setBanner(
            jsonData,
            this.prevTs,
            scale as IntensityScaleStandard
        );
        const areas = setAreas(
            this.state.areas,
            jsonData,
            this.prevTs,
            QUENE_LENGTH,
            adc,
            geophone,
            scale as IntensityScaleStandard
        );

        this.prevTs = jsonData.ts;
        this.setState({ banner, areas });
    };

    async componentDidMount(): Promise<void> {
        const res = await requestByTag({
            tag: "station",
        });
        if (res.data) {
            const { scale: fallbackScale } = GLOBAL_CONFIG.app_settings;
            const adc = setADC(res);
            const geophone = setGeophone(res);
            const scale = getLocalStorage(
                "scale",
                fallbackScale
            ) as IntensityScaleStandard;
            this.setState({ adc, geophone, scale });
        } else {
            return;
        }

        this.websocket = websocketByTag({
            tag: "socket",
            onData: this.handleWebsocketData,
            onOpen: this.handleWebsocketOpen,
        }) as WebSocket;
    }

    componentWillUnmount(): void {
        if (this.websocket) {
            this.websocket.close();
            this.websocket = null;
        }
    }

    render() {
        const { areas, banner } = this.state;
        return (
            <View>
                <Header />
                <Sidebar />

                <Content>
                    <Navbar />
                    <Banner {...banner} />
                    <Container layout="none">
                        {areas.map(({ area, chart }, index) => (
                            <Area key={index} {...area}>
                                <Chart
                                    {...chart}
                                    tooltip={true}
                                    zooming={true}
                                    animation={false}
                                    tickPrecision={0.4}
                                    tickInterval={0.0001}
                                />
                            </Area>
                        ))}
                    </Container>
                </Content>

                <Scroller />
                <Footer />
                <Toaster position="top-center" />
            </View>
        );
    }
}
