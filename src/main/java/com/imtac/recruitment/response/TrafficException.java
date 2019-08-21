package com.imtac.recruitment.response;

/**
 * 
 * @author mirfan
 *
 */
public class TrafficException extends RuntimeException{

	private static final long serialVersionUID = 1L;

	public TrafficException()
	{
		super();
	}
	
	/**
	 * 
	 * @param message
	 */
	public TrafficException(String message)
	{
		super(message);
	}
	
	
	/**
	 * 
	 * @param message
	 * @param cause
	 */
	public TrafficException(String message,Throwable cause)
	{
		super(message,cause);
	}
	
	/**
	 * 
	 * @param cause
	 */
	public TrafficException(Throwable cause)
	{
		super(cause);
	}
}
