package com.app.dto;

public class ResponseDTO<T> {
	private T result;
	
	public ResponseDTO() {
		System.out.println(" in Response DTO def contructor...");
	}

	public ResponseDTO(T result) {
		super();
		this.result = result;
	}

	public T getResult() {
		return result;
	}

	public void setResult(T result) {
		this.result = result;
	}
	
	

}
