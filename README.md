# WGE
This is a game engine for browsers.

## Requirements

### Building
- `node ^5.0`
- `typescript ~1.7.3`
- Ruby Sass 3.4+ (`gem install sass`)
- Sass Globbing 1.1+ (`gem install sass-globbing`)

### Server
- `node ^5.0`
- MongoDB (future)

### Client
Latest version of evergreen browsers (Chrome, Firefox, Edge)

- WebGL (http://webglreport.com/)
	- WEBGL_draw_buffers
	- OES_texture_float
	- OES_vertex_array_object (future)
- WebWorkers (future)
- Pointer Lock
- Full ES5 (including strict mode)
- ES6:
	- Promise

## Renderer
The goal is to build a tiled deferred-shading renderer.