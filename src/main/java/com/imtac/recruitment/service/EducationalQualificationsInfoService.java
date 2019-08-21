package com.imtac.recruitment.service;

import java.util.ArrayList;

import com.imtac.recruitment.entity.EducationalQualifications;
import com.imtac.recruitment.entity.QualificationsArrayMapper;
import com.imtac.recruitment.response.Response;

public interface EducationalQualificationsInfoService {

	Response saveEducationalQualificationInfo(QualificationsArrayMapper aualificationsArrayMapper, Long userId);

	ArrayList<EducationalQualifications> getEducationalQualificationInfo(Long userId);

	Response getEducationalInfoByPrimaryKey(Long recordId);

	Response updateEducationalInfoByPrimaryKey(Long recordId, EducationalQualifications equQualifications);

}
