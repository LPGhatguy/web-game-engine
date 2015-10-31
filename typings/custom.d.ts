interface OES_VAO {
}

interface OES_vertex_array_object {
	createVertexArrayOES(): OES_VAO;
	bindVertexArrayOES(vao: OES_VAO);
}

interface WebGLRenderingContext {
	MAX_DRAW_BUFFERS_WEBGL: number;
}

interface WEBGL_draw_buffers {
	drawBuffersWEBGL(buffers: number[]);

	COLOR_ATTACHMENT0_WEBGL: number;
	COLOR_ATTACHMENT1_WEBGL: number;
	COLOR_ATTACHMENT2_WEBGL: number;
	COLOR_ATTACHMENT3_WEBGL: number;
}