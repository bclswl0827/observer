package geophone

import (
	"io"

	"github.com/bclswl0827/observer/driver/serial"
)

func (g *Geophone) Reset(port io.ReadWriteCloser) error {
	_, err := port.Write(RESET_WORD[:])
	if err != nil {
		return err
	}

	serial.Filter(port, ACK_WORD[:], 128)
	return nil
}
