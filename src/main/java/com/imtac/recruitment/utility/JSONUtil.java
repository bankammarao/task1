package com.imtac.recruitment.utility;

import java.util.List;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

public class JSONUtil {
	static ObjectMapper mapper = new ObjectMapper();
	

	public static String convertToJson(List<Object> obj) {
		String convertedJsonObj = null;
		try {
			convertedJsonObj = mapper.writeValueAsString(obj);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return convertedJsonObj;

	}


}
