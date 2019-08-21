package com.imtac.recruitment.service;

import com.imtac.recruitment.entity.FileUpload;

public interface FileStorageService {
	
	FileUpload saveFile(FileUpload fileupload);
	
	FileUpload getFileById(Long id);

}
