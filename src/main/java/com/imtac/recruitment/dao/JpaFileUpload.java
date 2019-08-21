package com.imtac.recruitment.dao;

import javax.persistence.Query;

import com.imtac.recruitment.entity.FileUpload;

public class JpaFileUpload extends JpaDao<FileUpload, Long> implements FileUploadDao{

	public JpaFileUpload() {
		super(FileUpload.class);
	}

	@Override
	public int deleteById(FileUpload fileUpload) {
		Query query = getEntityManager().createNativeQuery("update file_upload set status='"
				+ fileUpload.getStatus() + "' where id=" + fileUpload.getId());
		return query.executeUpdate();
	}

}
