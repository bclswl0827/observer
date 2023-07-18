package callbacks

import (
	"com.geophone.observer/feature"
	"com.geophone.observer/utils/logger"
	"com.geophone.observer/utils/text"
	"github.com/fatih/color"
)

func OnStop(module string, options *feature.FeatureOptions, v ...any) {
	logger.Print(module, text.Concat(v...), color.FgBlue)
}
