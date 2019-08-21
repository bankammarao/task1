package com.imtac.recruitment.serviceimpl;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.FileUploadDao;
import com.imtac.recruitment.entity.FileUpload;
import com.imtac.recruitment.service.FileStorageService;

public class FileStorageServiceImpl implements FileStorageService{
	
	@Autowired
	FileUploadDao fileUploadDao;

	@Override
	public FileUpload saveFile(FileUpload fileupload) {

            return fileUploadDao.save(fileupload);
	}

	public FileUpload getFileById(Long id) {
		return fileUploadDao.find(id);
	}

}
