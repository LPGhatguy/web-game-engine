interface OES_VAO {
}

interface OES_vertex_array_object {
	createVertexArrayOES(): OES_VAO;
	bindVertexArrayOES(vao: OES_VAO);
}