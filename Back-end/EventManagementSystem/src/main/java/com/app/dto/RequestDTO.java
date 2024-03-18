package com.app.dto;

public class RequestDTO<T> {
	private T requestBody;
	
	public RequestDTO() {
		System.out.println(" in request dto def contructor");
	}

	public T getRequestBody() {
		return requestBody;
	}

	public void setRequestBody(T requestBody) {
		this.requestBody = requestBody;
	}

	@Override
	public String toString() {
		return "RequestDTO [requestBody=" + requestBody + "]";
	}
	
	
}
