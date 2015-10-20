# WGE
This is a game engine for browsers.

## Requirements

### Building
- `node ^4.0`
- `typescript ^1.6`
- Ruby Sass 3.4+ (`gem install sass`)
- Sass Globbing 1.1+ (`gem install sass-globbing`)

### Server
- `node ^4.0`
- MongoDB (future)

### Client
- Evergreen Browsers (Chrome, Firefox, Edge)
	- WebGL
		- WEBGL_draw_buffers
		- OES_texture_float
	- WebWorkers
	- ES5

## Renderer
The goal is to build a deferred-shading renderer. Forward+ was evaluated, but would require compute shaders.