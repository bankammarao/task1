package com.imtac.recruitment.dao;

import com.imtac.recruitment.entity.FileUpload;

public interface FileUploadDao extends Dao<FileUpload, Long>{
	int deleteById(FileUpload fileUpload);
}
