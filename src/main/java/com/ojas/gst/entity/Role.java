package com.ojas.gst.entity;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
	USER("0"), SUPERADMIN("1"), ADMIN("2");
	private String authority;

	Role(String authority) {
		this.authority = authority;
	}

	
	public String getAuthority() {
		return this.authority;
	}
}
