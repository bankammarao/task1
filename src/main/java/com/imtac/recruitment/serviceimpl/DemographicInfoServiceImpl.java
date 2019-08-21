package com.imtac.recruitment.serviceimpl;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.time.Instant;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StreamUtils;

import com.imtac.recruitment.dao.AddressDao;
import com.imtac.recruitment.dao.CategoryDao;
import com.imtac.recruitment.dao.DemographicInfoDao;
import com.imtac.recruitment.dao.PositionDao;
import com.imtac.recruitment.entity.Achievement;
import com.imtac.recruitment.entity.Address;
import com.imtac.recruitment.entity.Certificate;
import com.imtac.recruitment.entity.DemographicInfo;
import com.imtac.recruitment.entity.DemographicInfoMapper;
import com.imtac.recruitment.entity.EducationalQualificationsMapper;
import com.imtac.recruitment.entity.EmploymentInfoMapper;
import com.imtac.recruitment.entity.ExperienceMapper;
import com.imtac.recruitment.entity.Reference;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.DemographicInfoService;
import com.imtac.recruitment.service.EmploymentInfoService;
import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

public class DemographicInfoServiceImpl implements DemographicInfoService {

	@Autowired
	private DemographicInfoDao demographicInfoDao;

	@Autowired
	private AddressDao addressDao;

	@Autowired
	private PositionDao positionDao;

	@Autowired
	private CategoryDao categoryDao;

	@Autowired
	EmploymentInfoService employmentInfoService;

	@Override
	public DemographicInfo saveDemographicInfo(DemographicInfo demographicInfo) {
		return demographicInfoDao.save(demographicInfo);
	}

	@Override
	public DemographicInfo getDemographicInfoById(Long id) {
		return demographicInfoDao.find(id);
	}

	/*
	 * @Override public void deleteDemographicInfoById(DemographicInfo
	 * demographicInfo) { demographicInfoDao.deleteById(demographicInfo); }
	 */

	@Override
	public DemographicInfo updateDemographicInfo(DemographicInfo demographicInfo) {
		return demographicInfoDao.save(demographicInfo);
	}

	@Override
	public void saveAddresses(List<Address> addresses, Long demographicId) {

		for (Address address : addresses) {
			address.setDemographIcinfoId(demographicId);
			addressDao.save(address);
		}
	}

	@Override
	public List<Address> getAddressesByDemographicInfoById(Long id) {

		return demographicInfoDao.getAddressesByDemographicInfoById(id);

	}

	public List<DemographicInfoMapper> getDemographicInfoByApplicationId(String applicationId) {
		List<DemographicInfoMapper> demographicInfoByApplicationId = demographicInfoDao
				.getDemographicInfoByApplicationId(applicationId, null, null);

		for (DemographicInfoMapper demographicInfoMapper : demographicInfoByApplicationId) {
			demographicInfoMapper
					.setAadharImage(demographicInfoDao.find(demographicInfoMapper.getId()).getAadharImage());
			demographicInfoMapper
					.setExServiceImage(demographicInfoDao.find(demographicInfoMapper.getId()).getExServiceImage());
			demographicInfoMapper
					.setAddresses(addressDao.getAddressesByDemographicInfoId(demographicInfoMapper.getId()));
		}
		return demographicInfoByApplicationId;
	}

	@Override
	public List<DemographicInfoMapper> getDemographicInfoByUserId(Long id) {
		return demographicInfoDao.getDemographicInfoByUserId(id);
	}

	@Override
	public Response generateAndAndDownPdfFile(String applicationId) {
		return generatePdf(applicationId);
	}

	private Response generatePdf(String applicationId) {

		Response response = new Response();
		Document document = new Document();

		Map<String, Object> applicationInfo = getApplicationInfoByApplicationId(applicationId);
		DemographicInfoMapper demographicinfo = (DemographicInfoMapper) applicationInfo.get("demographicInfo");
		EmploymentInfoMapper employmentInfo = (EmploymentInfoMapper) applicationInfo.get("employmentInfo");

		String home = System.getProperty("user.home");
		File filePath = new File("D:\\apache-tomcat-9.0.20-windows-x64\\apache-tomcat-9.0.20\\webapps\\report\\" + applicationId + ".pdf");
		try {
			PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(filePath));
			document.open();

			/* ============ Start of Main Heading =============== */
			InputStream in = DemographicInfoServiceImpl.class.getResourceAsStream("/images/ggu.jfif");
			Image logo = Image.getInstance(StreamUtils.copyToByteArray(in));
			logo.scaleAbsolute(65, 65);

			PdfPTable headerTable = new PdfPTable(2);
			headerTable.setWidthPercentage(100);
			headerTable.setSpacingBefore(20f);
			headerTable.setSpacingAfter(10f);
			float[] columnWidths = { 1f, 4f };
			headerTable.setWidths(columnWidths);

			PdfPCell cell1 = new PdfPCell(logo);
			cell1.setPaddingLeft(10);
			cell1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			cell1.setVerticalAlignment(Element.ALIGN_MIDDLE);
			cell1.setBorderColor(BaseColor.WHITE);

			Font headingFont = new Font(Font.FontFamily.TIMES_ROMAN, 16f, Font.BOLD | Font.UNDERLINE);
			Paragraph mainHeading = new Paragraph("GURUGRAM UNIVERSITY, GURUGRAM", headingFont);

			PdfPCell cell2 = new PdfPCell(mainHeading);
			cell2.setPaddingLeft(10);
			cell2.setHorizontalAlignment(Element.ALIGN_LEFT);
			cell2.setVerticalAlignment(Element.ALIGN_MIDDLE);
			cell2.setBorderColor(BaseColor.WHITE);

			headerTable.addCell(cell1);
			headerTable.addCell(cell2);
			document.add(headerTable);

			/* ============== End of Main Heading ================= */

			/* ============ Start of Sub Heading =============== */
			Font subHeadingFont = new Font(Font.FontFamily.TIMES_ROMAN, 12f, Font.BOLD);
			Paragraph subHeading = new Paragraph("Application Form for Non-Teaching Posts", subHeadingFont);
			subHeading.setAlignment(Paragraph.ALIGN_CENTER);
			subHeading.setPaddingTop(30);
			document.add(subHeading);
			/* ============ End of Sub Heading =============== */

			/* ============== Start of name and photo part ================= */
			InputStream ins = DemographicInfoServiceImpl.class.getResourceAsStream("/images/no-photo-icon.png");
			Image photo = Image.getInstance(StreamUtils.copyToByteArray(ins));
			photo.scaleAbsolute(80, 80);

			PdfPTable photoTable = new PdfPTable(2);
			photoTable.setSpacingBefore(10f);
			photoTable.setSpacingAfter(10f);
			photoTable.setWidthPercentage(85);
			float[] photoTableColumnWidths = { 4f, 1f };
			headerTable.setWidths(photoTableColumnWidths);

			PdfPCell nameCell = new PdfPCell(
					new Paragraph(demographicinfo.getFullName(), new Font(FontFamily.TIMES_ROMAN, 11f, Font.BOLD)));
			nameCell.setPaddingLeft(10);
			nameCell.setHorizontalAlignment(Element.ALIGN_CENTER);
			nameCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
			nameCell.setBorderColor(BaseColor.WHITE);

			PdfPCell photoCell = new PdfPCell(Image.getInstance(photo));
			if (null != employmentInfo.getPhotoImage()) {
				Image photoInstance = Image.getInstance(employmentInfo.getPhotoImage());
				photoInstance.scaleAbsolute(80, 80);
				photoCell = new PdfPCell(photoInstance);
			}
			photoCell.setPaddingLeft(10);
			photoCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
			photoCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
			photoCell.setBorderColor(BaseColor.WHITE);

			photoTable.addCell(nameCell);
			photoTable.addCell(photoCell);
			document.add(photoTable);
			/* ============== End of name and photo part ================= */

			/*
			 * ============== Start of Application Number and Signature part
			 */
			InputStream ins1 = DemographicInfoServiceImpl.class.getResourceAsStream("/images/no-sign.png");
			Image sign = Image.getInstance(StreamUtils.copyToByteArray(ins1));
			sign.scaleAbsolute(80, 30);
			Font leftSideFont = new Font(Font.FontFamily.TIMES_ROMAN, 10f, Font.BOLD);
			Font rightSideFont = new Font(Font.FontFamily.TIMES_ROMAN, 11f, Font.NORMAL);
			/*
			 * PdfPTable signAndAppNumTable = new PdfPTable(2);
			 * signAndAppNumTable.setSpacingBefore(3f);
			 * signAndAppNumTable.setSpacingAfter(10f);
			 * signAndAppNumTable.setWidthPercentage(85); float[]
			 * signAndAppNumTableColumnWidths = { 4f, 1f };
			 * headerTable.setWidths(signAndAppNumTableColumnWidths);
			 * 
			 * 
			 * PdfPCell appNumCell = new PdfPCell( new
			 * Paragraph("Application Number : " + "  " +
			 * demographicinfo.getApplicationNo(), leftSideFont));
			 * appNumCell.setPaddingLeft(10);
			 * appNumCell.setHorizontalAlignment(Element.ALIGN_LEFT);
			 * appNumCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
			 * appNumCell.setBorderColor(BaseColor.WHITE);
			 * 
			 * PdfPCell signCell = new PdfPCell(Image.getInstance(sign)); if
			 * (null != employmentInfo.getSignatureImage()) { signCell = new
			 * PdfPCell(Image.getInstance(employmentInfo.getSignatureImage()));
			 * } signCell.setPaddingLeft(10);
			 * signCell.setHorizontalAlignment(Element.ALIGN_RIGHT);
			 * signCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
			 * signCell.setBorderColor(BaseColor.WHITE);
			 * 
			 * signAndAppNumTable.addCell(appNumCell);
			 * signAndAppNumTable.addCell(signCell);
			 * document.add(signAndAppNumTable);
			 */

			/*
			 * End of Application Number and Signature part
			 */

			// Addding Application Number
			Paragraph appNo = new Paragraph(
					"        " + "Application Number : " + "  " + demographicinfo.getApplicationNo(), leftSideFont);
			appNo.setAlignment(Element.ALIGN_LEFT);
			document.add(appNo);

			/*
			 * Start of Demograpghic & Application Information part
			 */

			PdfPTable demographicTable = new PdfPTable(3);
			demographicTable.setWidthPercentage(100);
			demographicTable.setSpacingBefore(10f);
			demographicTable.setSpacingAfter(10f);

			// Set Column widths
			float[] columnWidth = { 0.2f, 2f, 2f };
			demographicTable.setWidths(columnWidth);

			// Post Applied For
			PdfPCell postApplied1 = new PdfPCell(new Paragraph("1. ", rightSideFont));
			postApplied1.setBorderColor(BaseColor.WHITE);
			postApplied1.setPaddingLeft(10);
			postApplied1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			postApplied1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell postApplied2 = new PdfPCell(new Paragraph("a) Post applied for : ", leftSideFont));
			postApplied2.setBorderColor(BaseColor.WHITE);
			postApplied2.setPaddingLeft(10);
			postApplied2.setHorizontalAlignment(Element.ALIGN_LEFT);
			postApplied2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell postApplied3 = new PdfPCell(
					new Paragraph(demographicinfo.getPossitionAppliedFor(), rightSideFont));
			postApplied3.setBorderColor(BaseColor.WHITE);
			postApplied3.setPaddingLeft(10);
			postApplied3.setHorizontalAlignment(Element.ALIGN_LEFT);
			postApplied3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(postApplied1);
			demographicTable.addCell(postApplied2);
			demographicTable.addCell(postApplied3);

			// Category of Reserved Advertised Post
			PdfPCell category1 = new PdfPCell(new Paragraph(" ", rightSideFont));
			category1.setBorderColor(BaseColor.WHITE);
			category1.setPaddingLeft(10);
			category1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			category1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell category2 = new PdfPCell(
					new Paragraph("b) Category of Reserved Advertised Post : ", leftSideFont));
			category2.setBorderColor(BaseColor.WHITE);
			category2.setPaddingLeft(10);
			category2.setHorizontalAlignment(Element.ALIGN_LEFT);
			category2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell category3 = new PdfPCell(new Paragraph(demographicinfo.getCategoryName(), rightSideFont));
			category3.setBorderColor(BaseColor.WHITE);
			category3.setPaddingLeft(10);
			category3.setHorizontalAlignment(Element.ALIGN_LEFT);
			category3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(category1);
			demographicTable.addCell(category2);
			demographicTable.addCell(category3);

			// Advertisement No.
			PdfPCell advNo1 = new PdfPCell(new Paragraph(" ", rightSideFont));
			advNo1.setBorderColor(BaseColor.WHITE);
			advNo1.setPaddingLeft(10);
			advNo1.setHorizontalAlignment(Element.ALIGN_RIGHT);

			PdfPCell advNo2 = new PdfPCell(new Paragraph("c) Advertisement No. : ", leftSideFont));
			advNo2.setBorderColor(BaseColor.WHITE);
			advNo2.setPaddingLeft(10);
			advNo2.setHorizontalAlignment(Element.ALIGN_LEFT);
			advNo2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell advNo3 = new PdfPCell(new Paragraph("", rightSideFont));
			advNo3.setBorderColor(BaseColor.WHITE);
			advNo3.setPaddingLeft(10);
			advNo3.setHorizontalAlignment(Element.ALIGN_LEFT);
			advNo3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(advNo1);
			demographicTable.addCell(advNo2);
			demographicTable.addCell(advNo3);

			// start of empty row 1
			PdfPCell emptyColOne1 = new PdfPCell(new Paragraph(" "));
			emptyColOne1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColOne2 = new PdfPCell(new Paragraph(" "));
			emptyColOne2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColOne3 = new PdfPCell(new Paragraph(" "));
			emptyColOne3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColOne1);
			demographicTable.addCell(emptyColOne2);
			demographicTable.addCell(emptyColOne3);
			// start of empty row 1

			// Name Of Candidate
			PdfPCell candidateName1 = new PdfPCell(new Paragraph("2.", rightSideFont));
			candidateName1.setBorderColor(BaseColor.WHITE);
			candidateName1.setPaddingLeft(10);
			candidateName1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			candidateName1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell candidateName2 = new PdfPCell(new Paragraph("a) Candidate Full Name : ", leftSideFont));
			candidateName2.setBorderColor(BaseColor.WHITE);
			candidateName2.setPaddingLeft(10);
			candidateName2.setHorizontalAlignment(Element.ALIGN_LEFT);
			candidateName2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell candidateName3 = new PdfPCell(new Paragraph(demographicinfo.getFullName(), rightSideFont));
			candidateName3.setBorderColor(BaseColor.WHITE);
			candidateName3.setPaddingLeft(10);
			candidateName3.setHorizontalAlignment(Element.ALIGN_LEFT);
			candidateName3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(candidateName1);
			demographicTable.addCell(candidateName2);
			demographicTable.addCell(candidateName3);

			// Father Name
			PdfPCell fatherName1 = new PdfPCell(new Paragraph(" ", rightSideFont));
			fatherName1.setBorderColor(BaseColor.WHITE);
			fatherName1.setPaddingLeft(10);
			fatherName1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			fatherName1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell fatherName2 = new PdfPCell(new Paragraph("b) Father Name : ", leftSideFont));
			fatherName2.setBorderColor(BaseColor.WHITE);
			fatherName2.setPaddingLeft(10);
			fatherName2.setHorizontalAlignment(Element.ALIGN_LEFT);
			fatherName2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell fatherName3 = new PdfPCell(new Paragraph(demographicinfo.getFatherName(), rightSideFont));
			fatherName3.setBorderColor(BaseColor.WHITE);
			fatherName3.setPaddingLeft(10);
			fatherName3.setHorizontalAlignment(Element.ALIGN_LEFT);
			fatherName3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(fatherName1);
			demographicTable.addCell(fatherName2);
			demographicTable.addCell(fatherName3);

			// Mother Name
			PdfPCell motherName1 = new PdfPCell(new Paragraph(" ", rightSideFont));
			motherName1.setBorderColor(BaseColor.WHITE);
			motherName1.setPaddingLeft(10);
			motherName1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			motherName1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell motherName2 = new PdfPCell(new Paragraph("c) Mother Name : ", leftSideFont));
			motherName2.setBorderColor(BaseColor.WHITE);
			motherName2.setPaddingLeft(10);
			motherName2.setHorizontalAlignment(Element.ALIGN_LEFT);
			motherName2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell motherName3 = new PdfPCell(new Paragraph(demographicinfo.getMotherName(), rightSideFont));
			motherName3.setBorderColor(BaseColor.WHITE);
			motherName3.setPaddingLeft(10);
			motherName3.setHorizontalAlignment(Element.ALIGN_LEFT);
			motherName3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(motherName1);
			demographicTable.addCell(motherName2);
			demographicTable.addCell(motherName3);

			// start of empty row 2
			PdfPCell emptyColTwo1 = new PdfPCell(new Paragraph(" "));
			emptyColTwo1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColTwo2 = new PdfPCell(new Paragraph(" "));
			emptyColTwo2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColTwo3 = new PdfPCell(new Paragraph(" "));
			emptyColTwo3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColTwo1);
			demographicTable.addCell(emptyColTwo2);
			demographicTable.addCell(emptyColTwo3);
			// start of empty row 2

			// Present Postal Address
			PdfPCell presentPostalAddress1 = new PdfPCell(new Paragraph("3.", rightSideFont));
			presentPostalAddress1.setBorderColor(BaseColor.WHITE);
			presentPostalAddress1.setPaddingLeft(10);
			presentPostalAddress1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			presentPostalAddress1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell presentPostalAddress2 = new PdfPCell(new Paragraph("a) Present Postal Address : ", leftSideFont));
			presentPostalAddress2.setBorderColor(BaseColor.WHITE);
			presentPostalAddress2.setPaddingLeft(10);
			presentPostalAddress2.setHorizontalAlignment(Element.ALIGN_LEFT);
			presentPostalAddress2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			// Retrieving Address details
			List<Address> presentAddressList = null;
			if (!demographicinfo.getAddresses().isEmpty()) {
				presentAddressList = demographicinfo.getAddresses().stream()
						.filter(a -> a.getDemographIcinfoId().equals(demographicinfo.getId())
								&& a.getAddressType().matches("present address"))
						.collect(Collectors.toList());
			}

			PdfPCell presentPostalAddress3 = null;
			if (!presentAddressList.isEmpty()) {
				Address present = presentAddressList.get(0);
				presentPostalAddress3 = new PdfPCell(new Paragraph(
						present.getStreetAddress() + "\n" + present.getAddressLine2() + "\n" + present.getCity() + ","
								+ present.getState() + "," + present.getZipCode(),
						rightSideFont));
				presentPostalAddress3.setBorderColor(BaseColor.WHITE);
				presentPostalAddress3.setPaddingLeft(10);
				presentPostalAddress3.setHorizontalAlignment(Element.ALIGN_LEFT);
				presentPostalAddress3.setVerticalAlignment(Element.ALIGN_MIDDLE);
			} else {
				presentPostalAddress3 = new PdfPCell(new Paragraph("Present Address Not Found", rightSideFont));
				presentPostalAddress3.setBorderColor(BaseColor.WHITE);
				presentPostalAddress3.setPaddingLeft(10);
				presentPostalAddress3.setHorizontalAlignment(Element.ALIGN_LEFT);
				presentPostalAddress3.setVerticalAlignment(Element.ALIGN_MIDDLE);
			}

			demographicTable.addCell(presentPostalAddress1);
			demographicTable.addCell(presentPostalAddress2);
			demographicTable.addCell(presentPostalAddress3);

			// Permanent Address
			PdfPCell permanentAddress1 = new PdfPCell(new Paragraph("", rightSideFont));
			permanentAddress1.setBorderColor(BaseColor.WHITE);
			permanentAddress1.setPaddingLeft(10);
			permanentAddress1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			permanentAddress1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell permanentAddress2 = new PdfPCell(new Paragraph("b) Permanent Address : ", leftSideFont));
			permanentAddress2.setBorderColor(BaseColor.WHITE);
			permanentAddress2.setPaddingLeft(10);
			permanentAddress2.setHorizontalAlignment(Element.ALIGN_LEFT);
			permanentAddress2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			// Retrieving Permanent address
			List<Address> permanentAddressList = null;
			if (!demographicinfo.getAddresses().isEmpty()) {
				permanentAddressList = demographicinfo.getAddresses().stream()
						.filter(a -> a.getDemographIcinfoId().equals(demographicinfo.getId())
								&& a.getAddressType().matches("permanent address"))
						.collect(Collectors.toList());
			}

			PdfPCell permanentAddress3 = null;
			if (!permanentAddressList.isEmpty()) {
				Address permanent = permanentAddressList.get(0);
				permanentAddress3 = new PdfPCell(new Paragraph(
						permanent.getStreetAddress() + "\n" + permanent.getAddressLine2() + "\n" + permanent.getCity()
								+ "," + permanent.getState() + "," + permanent.getZipCode(),
						rightSideFont));
				permanentAddress3.setBorderColor(BaseColor.WHITE);
				permanentAddress3.setPaddingLeft(10);
				permanentAddress3.setHorizontalAlignment(Element.ALIGN_LEFT);
				permanentAddress3.setVerticalAlignment(Element.ALIGN_MIDDLE);
			} else {
				permanentAddress3 = new PdfPCell(new Paragraph("Permanent Address Not Found", rightSideFont));
				permanentAddress3.setBorderColor(BaseColor.WHITE);
				permanentAddress3.setPaddingLeft(10);
				permanentAddress3.setHorizontalAlignment(Element.ALIGN_LEFT);
				permanentAddress3.setVerticalAlignment(Element.ALIGN_MIDDLE);
			}

			demographicTable.addCell(permanentAddress1);
			demographicTable.addCell(permanentAddress2);
			demographicTable.addCell(permanentAddress3);

			// Mobile Number
			PdfPCell mobileNumber1 = new PdfPCell(new Paragraph("", rightSideFont));
			mobileNumber1.setBorderColor(BaseColor.WHITE);
			mobileNumber1.setPaddingLeft(10);
			mobileNumber1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			mobileNumber1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell mobileNumber2 = new PdfPCell(new Paragraph("c) Mobile Number : ", leftSideFont));
			mobileNumber2.setBorderColor(BaseColor.WHITE);
			mobileNumber2.setPaddingLeft(10);
			mobileNumber2.setHorizontalAlignment(Element.ALIGN_LEFT);
			mobileNumber2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell mobileNumber3 = new PdfPCell(new Paragraph(demographicinfo.getMobileNumber(), rightSideFont));
			mobileNumber3.setBorderColor(BaseColor.WHITE);
			mobileNumber3.setPaddingLeft(10);
			mobileNumber3.setHorizontalAlignment(Element.ALIGN_LEFT);
			mobileNumber3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(mobileNumber1);
			demographicTable.addCell(mobileNumber2);
			demographicTable.addCell(mobileNumber3);

			// Email Address
			PdfPCell email1 = new PdfPCell(new Paragraph("", rightSideFont));
			email1.setBorderColor(BaseColor.WHITE);
			email1.setPaddingLeft(10);
			email1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			email1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell email2 = new PdfPCell(new Paragraph("d) Email Address : ", leftSideFont));
			email2.setBorderColor(BaseColor.WHITE);
			email2.setPaddingLeft(10);
			email2.setHorizontalAlignment(Element.ALIGN_LEFT);
			email2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell email3 = new PdfPCell(new Paragraph(demographicinfo.getEmailId(), rightSideFont));
			email3.setBorderColor(BaseColor.WHITE);
			email3.setPaddingLeft(10);
			email3.setHorizontalAlignment(Element.ALIGN_LEFT);
			email3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(email1);
			demographicTable.addCell(email2);
			demographicTable.addCell(email3);

			// start of empty row 3
			PdfPCell emptyColThree1 = new PdfPCell(new Paragraph(" "));
			emptyColThree1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColThree2 = new PdfPCell(new Paragraph(" "));
			emptyColThree2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColThree3 = new PdfPCell(new Paragraph(" "));
			emptyColThree3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColThree1);
			demographicTable.addCell(emptyColThree2);
			demographicTable.addCell(emptyColThree3);
			// start of empty row 3

			// Date Of Birth
			PdfPCell dob1 = new PdfPCell(new Paragraph("4.", rightSideFont));
			dob1.setBorderColor(BaseColor.WHITE);
			dob1.setPaddingLeft(10);
			dob1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			dob1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell dob2 = new PdfPCell(new Paragraph("a) Date Of Birth : ", leftSideFont));
			dob2.setBorderColor(BaseColor.WHITE);
			dob2.setPaddingLeft(10);
			dob2.setHorizontalAlignment(Element.ALIGN_LEFT);
			dob2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			Instant instant = Instant.ofEpochMilli(demographicinfo.getDob().getTime());
			LocalDateTime localDateTime = LocalDateTime.ofInstant(instant, ZoneId.systemDefault());
			LocalDate dob = localDateTime.toLocalDate();

			PdfPCell dob3 = new PdfPCell(new Paragraph(
					dob.getDayOfMonth() + "-" + dob.getMonth().name() + "-" + dob.getYear(), rightSideFont));
			dob3.setBorderColor(BaseColor.WHITE);
			dob3.setPaddingLeft(10);
			dob3.setHorizontalAlignment(Element.ALIGN_LEFT);
			dob3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(dob1);
			demographicTable.addCell(dob2);
			demographicTable.addCell(dob3);

			// Age as on Last Date of Applying
			PdfPCell age1 = new PdfPCell(new Paragraph("", rightSideFont));
			age1.setBorderColor(BaseColor.WHITE);
			age1.setPaddingLeft(10);
			age1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			age1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell age2 = new PdfPCell(new Paragraph("b) Age as on Last Date of Applying : ", leftSideFont));
			age2.setBorderColor(BaseColor.WHITE);
			age2.setPaddingLeft(10);
			age2.setHorizontalAlignment(Element.ALIGN_LEFT);
			age2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell age3 = new PdfPCell(
					new Paragraph(Integer.toString(demographicinfo.getCurrentAge()), rightSideFont));
			age3.setBorderColor(BaseColor.WHITE);
			age3.setPaddingLeft(10);
			age3.setHorizontalAlignment(Element.ALIGN_LEFT);
			age3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(age1);
			demographicTable.addCell(age2);
			demographicTable.addCell(age3);

			// Place Of Birth
			PdfPCell pob1 = new PdfPCell(new Paragraph("", rightSideFont));
			pob1.setBorderColor(BaseColor.WHITE);
			pob1.setPaddingLeft(10);
			pob1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			pob1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell pob2 = new PdfPCell(new Paragraph("c) Place Of Birth : ", leftSideFont));
			pob2.setBorderColor(BaseColor.WHITE);
			pob2.setPaddingLeft(10);
			pob2.setHorizontalAlignment(Element.ALIGN_LEFT);
			pob2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell pob3 = new PdfPCell(new Paragraph(demographicinfo.getPlaceOfBirth(), rightSideFont));
			pob3.setBorderColor(BaseColor.WHITE);
			pob3.setPaddingLeft(10);
			pob3.setHorizontalAlignment(Element.ALIGN_LEFT);
			pob3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(pob1);
			demographicTable.addCell(pob2);
			demographicTable.addCell(pob3);

			// Aadhar Number
			PdfPCell aadhar1 = new PdfPCell(new Paragraph("", rightSideFont));
			aadhar1.setBorderColor(BaseColor.WHITE);
			aadhar1.setPaddingLeft(10);
			aadhar1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			aadhar1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell aadhar2 = new PdfPCell(new Paragraph("d) Aadhar Number  : ", leftSideFont));
			aadhar2.setBorderColor(BaseColor.WHITE);
			aadhar2.setPaddingLeft(10);
			aadhar2.setHorizontalAlignment(Element.ALIGN_LEFT);
			aadhar2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell aadhar3 = new PdfPCell(new Paragraph(demographicinfo.getAadharNumber(), rightSideFont));
			aadhar3.setBorderColor(BaseColor.WHITE);
			aadhar3.setPaddingLeft(10);
			aadhar3.setHorizontalAlignment(Element.ALIGN_LEFT);
			aadhar3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(aadhar1);
			demographicTable.addCell(aadhar2);
			demographicTable.addCell(aadhar3);

			// start of empty row 4
			PdfPCell emptyColFour1 = new PdfPCell(new Paragraph(" "));
			emptyColFour1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColFour2 = new PdfPCell(new Paragraph(" "));
			emptyColFour2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColFour3 = new PdfPCell(new Paragraph(" "));
			emptyColFour3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColFour1);
			demographicTable.addCell(emptyColFour2);
			demographicTable.addCell(emptyColFour3);
			// start of empty row 4

			// Nationality of Candidate
			PdfPCell nationality1 = new PdfPCell(new Paragraph("5.", rightSideFont));
			nationality1.setBorderColor(BaseColor.WHITE);
			nationality1.setPaddingLeft(10);
			nationality1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			nationality1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell nationality2 = new PdfPCell(new Paragraph("a) Nationality of Candidate  : ", leftSideFont));
			nationality2.setBorderColor(BaseColor.WHITE);
			nationality2.setPaddingLeft(10);
			nationality2.setHorizontalAlignment(Element.ALIGN_LEFT);
			nationality2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell nationality3 = new PdfPCell(new Paragraph(demographicinfo.getNationality(), rightSideFont));
			nationality3.setBorderColor(BaseColor.WHITE);
			nationality3.setPaddingLeft(10);
			nationality3.setHorizontalAlignment(Element.ALIGN_LEFT);
			nationality3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(nationality1);
			demographicTable.addCell(nationality2);
			demographicTable.addCell(nationality3);

			// Cast
			PdfPCell cast1 = new PdfPCell(new Paragraph("", rightSideFont));
			cast1.setBorderColor(BaseColor.WHITE);
			cast1.setPaddingLeft(10);
			cast1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			cast1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell cast2 = new PdfPCell(
					new Paragraph("b) Belong to SC/ST/BC/EBPG (As per Haryana) : ", leftSideFont));
			cast2.setBorderColor(BaseColor.WHITE);
			cast2.setPaddingLeft(10);
			cast2.setHorizontalAlignment(Element.ALIGN_LEFT);
			cast2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell cast3 = null;
			if (null != categoryDao.find(demographicinfo.getCategoryAsperHaryana())) {
				cast3 = new PdfPCell(new Paragraph(
						categoryDao.find(demographicinfo.getCategoryAsperHaryana()).getCategoryName(), rightSideFont));
			} else {
				cast3 = new PdfPCell(new Paragraph(" ", rightSideFont));
			}
			cast3.setBorderColor(BaseColor.WHITE);
			cast3.setPaddingLeft(10);
			cast3.setHorizontalAlignment(Element.ALIGN_LEFT);
			cast3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(cast1);
			demographicTable.addCell(cast2);
			demographicTable.addCell(cast3);

			// Ex-Service
			PdfPCell exService1 = new PdfPCell(new Paragraph("", rightSideFont));
			exService1.setBorderColor(BaseColor.WHITE);
			exService1.setPaddingLeft(10);
			exService1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			exService1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell exService2 = new PdfPCell(new Paragraph("c) Ex-Servicemen of Haryana (Y/N) : ", leftSideFont));
			exService2.setBorderColor(BaseColor.WHITE);
			exService2.setPaddingLeft(10);
			exService2.setHorizontalAlignment(Element.ALIGN_LEFT);
			exService2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell exService3 = null;
			if (demographicinfo.isExServiceMan() == true) {
				exService3 = new PdfPCell(new Paragraph("Yes", rightSideFont));
			} else if (demographicinfo.isExServiceMan() == false) {
				exService3 = new PdfPCell(new Paragraph("No", rightSideFont));
			} else {
				exService3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			exService3.setBorderColor(BaseColor.WHITE);
			exService3.setPaddingLeft(10);
			exService3.setHorizontalAlignment(Element.ALIGN_LEFT);
			exService3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(exService1);
			demographicTable.addCell(exService2);
			demographicTable.addCell(exService3);

			// Gender
			PdfPCell gender1 = new PdfPCell(new Paragraph("", rightSideFont));
			gender1.setBorderColor(BaseColor.WHITE);
			gender1.setPaddingLeft(10);
			gender1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			gender1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell gender2 = new PdfPCell(new Paragraph("d) Gender  : ", leftSideFont));
			gender2.setBorderColor(BaseColor.WHITE);
			gender2.setPaddingLeft(10);
			gender2.setHorizontalAlignment(Element.ALIGN_LEFT);
			gender2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell gender3 = new PdfPCell(new Paragraph(demographicinfo.getGender(), rightSideFont));
			gender3.setBorderColor(BaseColor.WHITE);
			gender3.setPaddingLeft(10);
			gender3.setHorizontalAlignment(Element.ALIGN_LEFT);
			gender3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(gender1);
			demographicTable.addCell(gender2);
			demographicTable.addCell(gender3);

			// Marital Status
			PdfPCell maritalStatus1 = new PdfPCell(new Paragraph("", rightSideFont));
			maritalStatus1.setBorderColor(BaseColor.WHITE);
			maritalStatus1.setPaddingLeft(10);
			maritalStatus1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			maritalStatus1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell maritalStatus2 = new PdfPCell(new Paragraph("e) Marital Status  : ", leftSideFont));
			maritalStatus2.setBorderColor(BaseColor.WHITE);
			maritalStatus2.setPaddingLeft(10);
			maritalStatus2.setHorizontalAlignment(Element.ALIGN_LEFT);
			maritalStatus2.setVerticalAlignment(Element.ALIGN_MIDDLE);
			PdfPCell maritalStatus3 = new PdfPCell(new Paragraph(demographicinfo.getMaritalStatus() + "\n"
					+ "More than one living spouse : " + demographicinfo.getMoreLivingSpouses(), rightSideFont));
			maritalStatus3.setBorderColor(BaseColor.WHITE);
			maritalStatus3.setPaddingLeft(10);
			maritalStatus3.setHorizontalAlignment(Element.ALIGN_LEFT);
			maritalStatus3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(maritalStatus1);
			demographicTable.addCell(maritalStatus2);
			demographicTable.addCell(maritalStatus3);

			// start of empty row 5
			PdfPCell emptyColFive1 = new PdfPCell(new Paragraph(" "));
			emptyColFive1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColFive2 = new PdfPCell(new Paragraph(" "));
			emptyColFive2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColFive3 = new PdfPCell(new Paragraph(" "));
			emptyColFive3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColFive1);
			demographicTable.addCell(emptyColFive2);
			demographicTable.addCell(emptyColFive3);
			// start of empty row 5

			// Present Employment
			PdfPCell presentEmp1 = new PdfPCell(new Paragraph("6.", rightSideFont));
			presentEmp1.setBorderColor(BaseColor.WHITE);
			presentEmp1.setPaddingLeft(10);
			presentEmp1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			presentEmp1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell presentEmp2 = new PdfPCell(new Paragraph("a) Present Employement  : ", leftSideFont));
			presentEmp2.setBorderColor(BaseColor.WHITE);
			presentEmp2.setPaddingLeft(10);
			presentEmp2.setHorizontalAlignment(Element.ALIGN_LEFT);
			presentEmp2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell presentEmp3 = null;
			if (employmentInfo.isPresentEmployment() == true) {
				presentEmp3 = new PdfPCell(new Paragraph("Yes", rightSideFont));
			} else if (employmentInfo.isPresentEmployment() == false) {
				presentEmp3 = new PdfPCell(new Paragraph("No", rightSideFont));
			} else {
				presentEmp3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			presentEmp3.setBorderColor(BaseColor.WHITE);
			presentEmp3.setPaddingLeft(10);
			presentEmp3.setHorizontalAlignment(Element.ALIGN_LEFT);
			presentEmp3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(presentEmp1);
			demographicTable.addCell(presentEmp2);
			demographicTable.addCell(presentEmp3);

			// Next Increment Date
			PdfPCell nextIncDate1 = new PdfPCell(new Paragraph("", rightSideFont));
			nextIncDate1.setBorderColor(BaseColor.WHITE);
			nextIncDate1.setPaddingLeft(10);
			nextIncDate1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			nextIncDate1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell nextIncDate2 = new PdfPCell(new Paragraph("b) Date of Next Increment  : ", leftSideFont));
			nextIncDate2.setBorderColor(BaseColor.WHITE);
			nextIncDate2.setPaddingLeft(10);
			nextIncDate2.setHorizontalAlignment(Element.ALIGN_LEFT);
			nextIncDate2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			Instant instan2 = Instant.ofEpochMilli(employmentInfo.getDateOfNextIncrement().getTime());
			LocalDateTime localDateTime2 = LocalDateTime.ofInstant(instan2, ZoneId.systemDefault());
			LocalDate nextIncrement = localDateTime2.toLocalDate();

			PdfPCell nextIncDate3 = new PdfPCell(new Paragraph(nextIncrement.getDayOfMonth() + "-"
					+ nextIncrement.getMonth().name() + "-" + nextIncrement.getYear(), rightSideFont));
			nextIncDate3.setBorderColor(BaseColor.WHITE);
			nextIncDate3.setPaddingLeft(10);
			nextIncDate3.setHorizontalAlignment(Element.ALIGN_LEFT);
			nextIncDate3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(nextIncDate1);
			demographicTable.addCell(nextIncDate2);
			demographicTable.addCell(nextIncDate3);

			// Employer
			PdfPCell employer1 = new PdfPCell(new Paragraph("", rightSideFont));
			employer1.setBorderColor(BaseColor.WHITE);
			employer1.setPaddingLeft(10);
			employer1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			employer1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell employer2 = new PdfPCell(new Paragraph("c) Name of Employer  : ", leftSideFont));
			employer2.setBorderColor(BaseColor.WHITE);
			employer2.setPaddingLeft(10);
			employer2.setHorizontalAlignment(Element.ALIGN_LEFT);
			employer2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell employer3 = new PdfPCell(new Paragraph(employmentInfo.getNameOfEmployer(), rightSideFont));
			employer3.setBorderColor(BaseColor.WHITE);
			employer3.setPaddingLeft(10);
			employer3.setHorizontalAlignment(Element.ALIGN_LEFT);
			employer3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(employer1);
			demographicTable.addCell(employer2);
			demographicTable.addCell(employer3);

			// Permission of Employer
			PdfPCell employerPermission1 = new PdfPCell(new Paragraph("", rightSideFont));
			employerPermission1.setBorderColor(BaseColor.WHITE);
			employerPermission1.setPaddingLeft(10);
			employerPermission1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			employerPermission1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell employerPermission2 = new PdfPCell(
					new Paragraph("d) Permission of Employer for this Application (Y/N)  : ", leftSideFont));
			employerPermission2.setBorderColor(BaseColor.WHITE);
			employerPermission2.setPaddingLeft(10);
			employerPermission2.setHorizontalAlignment(Element.ALIGN_LEFT);
			employerPermission2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell employerPermission3 = null;
			if (employmentInfo.isPermissionFromPresentEmployer() == true) {
				employerPermission3 = new PdfPCell(new Paragraph("Yes", rightSideFont));
			} else if (employmentInfo.isPermissionFromPresentEmployer() == false) {
				employerPermission3 = new PdfPCell(new Paragraph("No", rightSideFont));
			} else {
				employerPermission3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			employerPermission3.setBorderColor(BaseColor.WHITE);
			employerPermission3.setPaddingLeft(10);
			employerPermission3.setHorizontalAlignment(Element.ALIGN_LEFT);
			employerPermission3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(employerPermission1);
			demographicTable.addCell(employerPermission2);
			demographicTable.addCell(employerPermission3);

			// Acceptable Pay
			PdfPCell acceptablePay1 = new PdfPCell(new Paragraph("", rightSideFont));
			acceptablePay1.setBorderColor(BaseColor.WHITE);
			acceptablePay1.setPaddingLeft(10);
			acceptablePay1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			acceptablePay1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell acceptablePay2 = new PdfPCell(
					new Paragraph("e) Basic Pay Acceptable if Seleceted : ", leftSideFont));
			acceptablePay2.setBorderColor(BaseColor.WHITE);
			acceptablePay2.setPaddingLeft(10);
			acceptablePay2.setHorizontalAlignment(Element.ALIGN_LEFT);
			acceptablePay2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell acceptablePay3 = new PdfPCell(
					new Paragraph(employmentInfo.getBasicPayAcceptable().toString(), rightSideFont));
			acceptablePay3.setBorderColor(BaseColor.WHITE);
			acceptablePay3.setPaddingLeft(10);
			acceptablePay3.setHorizontalAlignment(Element.ALIGN_LEFT);
			acceptablePay3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(acceptablePay1);
			demographicTable.addCell(acceptablePay2);
			demographicTable.addCell(acceptablePay3);

			// Period required for Joining if Appointed
			PdfPCell requiredPeriod1 = new PdfPCell(new Paragraph("", rightSideFont));
			requiredPeriod1.setBorderColor(BaseColor.WHITE);
			requiredPeriod1.setPaddingLeft(10);
			requiredPeriod1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			requiredPeriod1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell requiredPeriod2 = new PdfPCell(
					new Paragraph("f) Period required for Joining if Appointed : ", leftSideFont));
			requiredPeriod2.setBorderColor(BaseColor.WHITE);
			requiredPeriod2.setPaddingLeft(10);
			requiredPeriod2.setHorizontalAlignment(Element.ALIGN_LEFT);
			requiredPeriod2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell requiredPeriod3 = new PdfPCell(
					new Paragraph(Integer.toString(employmentInfo.getNoticePeriod()), rightSideFont));
			requiredPeriod3.setBorderColor(BaseColor.WHITE);
			requiredPeriod3.setPaddingLeft(10);
			requiredPeriod3.setHorizontalAlignment(Element.ALIGN_LEFT);
			requiredPeriod3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(requiredPeriod1);
			demographicTable.addCell(requiredPeriod2);
			demographicTable.addCell(requiredPeriod3);

			// start of empty row 6
			PdfPCell emptyColSix1 = new PdfPCell(new Paragraph(" "));
			emptyColSix1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColSix2 = new PdfPCell(new Paragraph(" "));
			emptyColSix2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColSix3 = new PdfPCell(new Paragraph(" "));
			emptyColSix3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColSix1);
			demographicTable.addCell(emptyColSix2);
			demographicTable.addCell(emptyColSix3);
			// start of empty row 6

			// Disqualified University Exams
			PdfPCell disqualifiedExams1 = new PdfPCell(new Paragraph("7.", rightSideFont));
			disqualifiedExams1.setBorderColor(BaseColor.WHITE);
			disqualifiedExams1.setPaddingLeft(10);
			disqualifiedExams1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			disqualifiedExams1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell disqualifiedExams2 = new PdfPCell(
					new Paragraph("a) Disqualified in any university exam/work (Y/N): ", leftSideFont));
			disqualifiedExams2.setBorderColor(BaseColor.WHITE);
			disqualifiedExams2.setPaddingLeft(10);
			disqualifiedExams2.setHorizontalAlignment(Element.ALIGN_LEFT);
			disqualifiedExams2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell disqualifiedExams3 = null;
			if (employmentInfo.isDisqualifiedInExam() == true) {
				disqualifiedExams3 = new PdfPCell(new Paragraph("Yes", rightSideFont));
			} else if (employmentInfo.isDisqualifiedInExam() == false) {
				disqualifiedExams3 = new PdfPCell(new Paragraph("No", rightSideFont));
			} else {
				disqualifiedExams3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			disqualifiedExams3.setBorderColor(BaseColor.WHITE);
			disqualifiedExams3.setPaddingLeft(10);
			disqualifiedExams3.setHorizontalAlignment(Element.ALIGN_LEFT);
			disqualifiedExams3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(disqualifiedExams1);
			demographicTable.addCell(disqualifiedExams2);
			demographicTable.addCell(disqualifiedExams3);

			// Dismissed Employee or Not
			PdfPCell dismissedEmployee1 = new PdfPCell(new Paragraph("", rightSideFont));
			dismissedEmployee1.setBorderColor(BaseColor.WHITE);
			dismissedEmployee1.setPaddingLeft(10);
			dismissedEmployee1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			dismissedEmployee1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell dismissedEmployee2 = new PdfPCell(
					new Paragraph("b) Are you a Dismissed Empployee : ", leftSideFont));
			dismissedEmployee2.setBorderColor(BaseColor.WHITE);
			dismissedEmployee2.setPaddingLeft(10);
			dismissedEmployee2.setHorizontalAlignment(Element.ALIGN_LEFT);
			dismissedEmployee2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell dismissedEmployee3 = null;
			if (employmentInfo.isDismissed() == true) {
				dismissedEmployee3 = new PdfPCell(new Paragraph("Yes", rightSideFont));
			} else if (employmentInfo.isDismissed() == false) {
				dismissedEmployee3 = new PdfPCell(new Paragraph("No", rightSideFont));
			} else {
				dismissedEmployee3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			dismissedEmployee3.setBorderColor(BaseColor.WHITE);
			dismissedEmployee3.setPaddingLeft(10);
			dismissedEmployee3.setHorizontalAlignment(Element.ALIGN_LEFT);
			dismissedEmployee3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(dismissedEmployee1);
			demographicTable.addCell(dismissedEmployee2);
			demographicTable.addCell(dismissedEmployee3);

			// start of empty row 7
			PdfPCell emptyColSeven1 = new PdfPCell(new Paragraph(" "));
			emptyColSeven1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColSeven2 = new PdfPCell(new Paragraph(" "));
			emptyColSeven2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColSeven3 = new PdfPCell(new Paragraph(" "));
			emptyColSeven3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColSeven1);
			demographicTable.addCell(emptyColSeven2);
			demographicTable.addCell(emptyColSeven3);
			// start of empty row 7

			// Any Criminal Case Registered Against Applicant
			PdfPCell criminalCase1 = new PdfPCell(new Paragraph("8.", rightSideFont));
			criminalCase1.setBorderColor(BaseColor.WHITE);
			criminalCase1.setPaddingLeft(10);
			criminalCase1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			criminalCase1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell criminalCase2 = new PdfPCell(
					new Paragraph("a) Any Criminal Case Against Applicant : ", leftSideFont));
			criminalCase2.setBorderColor(BaseColor.WHITE);
			criminalCase2.setPaddingLeft(10);
			criminalCase2.setHorizontalAlignment(Element.ALIGN_LEFT);
			criminalCase2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell criminalCase3 = null;
			if (employmentInfo.isCriminalCaseRegistered() == true) {
				criminalCase3 = new PdfPCell(new Paragraph("Yes", rightSideFont));
			} else if (employmentInfo.isCriminalCaseRegistered() == false) {
				criminalCase3 = new PdfPCell(new Paragraph("No", rightSideFont));
			} else {
				criminalCase3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			criminalCase3.setBorderColor(BaseColor.WHITE);
			criminalCase3.setPaddingLeft(10);
			criminalCase3.setHorizontalAlignment(Element.ALIGN_LEFT);
			criminalCase3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(criminalCase1);
			demographicTable.addCell(criminalCase2);
			demographicTable.addCell(criminalCase3);

			// Any Charge Sheet Against Applicant
			PdfPCell chargeSheet1 = new PdfPCell(new Paragraph(" ", rightSideFont));
			chargeSheet1.setBorderColor(BaseColor.WHITE);
			chargeSheet1.setPaddingLeft(10);
			chargeSheet1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			chargeSheet1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell chargeSheet2 = new PdfPCell(new Paragraph("b) Charge Sheet Details (if any) : ", leftSideFont));
			chargeSheet2.setBorderColor(BaseColor.WHITE);
			chargeSheet2.setPaddingLeft(10);
			chargeSheet2.setHorizontalAlignment(Element.ALIGN_LEFT);
			chargeSheet2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell chargeSheet3 = null;
			if (employmentInfo.isCriminalCaseRegistered() == true) {
				chargeSheet3 = new PdfPCell(
						new Paragraph("Yes" + "\n" + employmentInfo.getChargeSheetDetails(), rightSideFont));
			} else if (employmentInfo.isCriminalCaseRegistered() == false) {
				chargeSheet3 = new PdfPCell(
						new Paragraph("No" + "\n" + employmentInfo.getChargeSheetDetails(), rightSideFont));
			} else {
				chargeSheet3 = new PdfPCell(new Paragraph("  ", rightSideFont));
			}
			chargeSheet3.setBorderColor(BaseColor.WHITE);
			chargeSheet3.setPaddingLeft(10);
			chargeSheet3.setHorizontalAlignment(Element.ALIGN_LEFT);
			chargeSheet3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(chargeSheet1);
			demographicTable.addCell(chargeSheet2);
			demographicTable.addCell(chargeSheet3);

			// Convicted by any court or any criminal offense
			PdfPCell conviction1 = new PdfPCell(new Paragraph("", rightSideFont));
			conviction1.setBorderColor(BaseColor.WHITE);
			conviction1.setPaddingLeft(10);
			conviction1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			conviction1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell conviction2 = new PdfPCell(
					new Paragraph("c) Convicted by any competent court or any criminal offense : ", leftSideFont));
			conviction2.setBorderColor(BaseColor.WHITE);
			conviction2.setPaddingLeft(10);
			conviction2.setHorizontalAlignment(Element.ALIGN_LEFT);
			conviction2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell conviction3 = new PdfPCell(
					new Paragraph(employmentInfo.getConvictedByCourtDetails(), rightSideFont));
			conviction3.setBorderColor(BaseColor.WHITE);
			conviction3.setPaddingLeft(10);
			conviction3.setHorizontalAlignment(Element.ALIGN_LEFT);
			conviction3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(conviction1);
			demographicTable.addCell(conviction2);
			demographicTable.addCell(conviction3);

			// start of empty row 8
			PdfPCell emptyColEight1 = new PdfPCell(new Paragraph(" "));
			emptyColEight1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColEight2 = new PdfPCell(new Paragraph(" "));
			emptyColEight2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColEight3 = new PdfPCell(new Paragraph(" "));
			emptyColEight3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColEight1);
			demographicTable.addCell(emptyColEight2);
			demographicTable.addCell(emptyColEight3);
			// start of empty row 8

			// Amount Payable
			PdfPCell amtPay1 = new PdfPCell(new Paragraph("9.", rightSideFont));
			amtPay1.setBorderColor(BaseColor.WHITE);
			amtPay1.setPaddingLeft(10);
			amtPay1.setHorizontalAlignment(Element.ALIGN_RIGHT);
			amtPay1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell amtPay2 = new PdfPCell(new Paragraph(" Amount Payable : ", leftSideFont));
			amtPay2.setBorderColor(BaseColor.WHITE);
			amtPay2.setPaddingLeft(10);
			amtPay2.setHorizontalAlignment(Element.ALIGN_LEFT);
			amtPay2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell amtPay3 = new PdfPCell(new Paragraph(Double.toString(employmentInfo.getPay()), rightSideFont));
			amtPay3.setBorderColor(BaseColor.WHITE);
			amtPay3.setPaddingLeft(10);
			amtPay3.setHorizontalAlignment(Element.ALIGN_LEFT);
			amtPay3.setVerticalAlignment(Element.ALIGN_MIDDLE);

			demographicTable.addCell(amtPay1);
			demographicTable.addCell(amtPay2);
			demographicTable.addCell(amtPay3);

			// start of empty row 9
			PdfPCell emptyColNine1 = new PdfPCell(new Paragraph(" "));
			emptyColNine1.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColNine2 = new PdfPCell(new Paragraph(" "));
			emptyColNine2.setBorderColor(BaseColor.WHITE);

			PdfPCell emptyColNine3 = new PdfPCell(new Paragraph(" "));
			emptyColNine3.setBorderColor(BaseColor.WHITE);

			demographicTable.addCell(emptyColNine1);
			demographicTable.addCell(emptyColNine2);
			demographicTable.addCell(emptyColNine3);
			// start of empty row 9

			// ==============Adding Table=============//
			document.add(demographicTable);

			/*
			 * ============== End of Demograpghic & Application Information part
			 */

			/* =================Start of References Table================== */

			PdfPTable referencesTable = new PdfPTable(2);
			referencesTable.setSpacingBefore(3f);
			referencesTable.setSpacingAfter(10f);
			referencesTable.setWidthPercentage(100);
			float[] referencesTableColumnWidths = { 2f, 3f };
			headerTable.setWidths(referencesTableColumnWidths);

			// references
			PdfPCell refHead1 = new PdfPCell(new Paragraph("10. References ", leftSideFont));
			refHead1.setBorderColor(BaseColor.WHITE);
			refHead1.setPaddingLeft(10);
			refHead1.setHorizontalAlignment(Element.ALIGN_LEFT);
			refHead1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell refHead2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			refHead2.setBorderColor(BaseColor.WHITE);

			referencesTable.addCell(refHead1);
			referencesTable.addCell(refHead2);

			List<Reference> empReferences = employmentInfo.getReferences();

			// ====Start of First Reference Info====//
			// Name
			PdfPCell firstReferenceName1 = new PdfPCell(new Paragraph("a) Name : ", rightSideFont));
			firstReferenceName1.setBorderColor(BaseColor.WHITE);
			firstReferenceName1.setPaddingLeft(10);
			firstReferenceName1.setHorizontalAlignment(Element.ALIGN_LEFT);
			firstReferenceName1.setVerticalAlignment(Element.ALIGN_CENTER);

			PdfPCell firstReferenceName2 = new PdfPCell(new Paragraph(" ", rightSideFont));
			firstReferenceName2.setBorderColor(BaseColor.WHITE);

			// Occupations or Position
			PdfPCell firstReferenceOccupation1 = new PdfPCell(
					new Paragraph("   Occupation or Position : ", rightSideFont));
			firstReferenceOccupation1.setBorderColor(BaseColor.WHITE);
			firstReferenceOccupation1.setPaddingLeft(10);
			firstReferenceOccupation1.setHorizontalAlignment(Element.ALIGN_LEFT);
			firstReferenceOccupation1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell firstReferenceOccupation2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			firstReferenceOccupation2.setBorderColor(BaseColor.WHITE);

			// Address
			PdfPCell firstReferenceAddress1 = new PdfPCell(new Paragraph("   Address : ", rightSideFont));
			firstReferenceAddress1.setBorderColor(BaseColor.WHITE);
			firstReferenceAddress1.setPaddingLeft(10);
			firstReferenceAddress1.setHorizontalAlignment(Element.ALIGN_LEFT);
			firstReferenceAddress1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell firstReferenceAddress2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			firstReferenceAddress2.setBorderColor(BaseColor.WHITE);

			// Email
			PdfPCell firstReferenceEmail1 = new PdfPCell(new Paragraph("   Email : ", rightSideFont));
			firstReferenceEmail1.setBorderColor(BaseColor.WHITE);
			firstReferenceEmail1.setPaddingLeft(10);
			firstReferenceEmail1.setHorizontalAlignment(Element.ALIGN_LEFT);
			firstReferenceEmail1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell firstReferenceEmail2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			firstReferenceEmail2.setBorderColor(BaseColor.WHITE);

			if (!empReferences.isEmpty()) {
				Reference r1 = empReferences.get(0);

				firstReferenceName2 = new PdfPCell(new Paragraph(r1.getName(), rightSideFont));
				firstReferenceName2.setPaddingLeft(5);
				firstReferenceName2.setBorderColor(BaseColor.WHITE);
				firstReferenceName2.setHorizontalAlignment(Element.ALIGN_LEFT);
				firstReferenceName2.setVerticalAlignment(Element.ALIGN_MIDDLE);

				firstReferenceOccupation2 = new PdfPCell(new Paragraph(r1.getPosition(), rightSideFont));
				firstReferenceOccupation2.setPaddingLeft(5);
				firstReferenceOccupation2.setBorderColor(BaseColor.WHITE);
				firstReferenceOccupation2.setHorizontalAlignment(Element.ALIGN_LEFT);
				firstReferenceOccupation2.setVerticalAlignment(Element.ALIGN_MIDDLE);

				firstReferenceAddress2 = new PdfPCell(new Paragraph(r1.getAddress(), rightSideFont));
				firstReferenceAddress2.setPaddingLeft(5);
				firstReferenceAddress2.setBorderColor(BaseColor.WHITE);
				firstReferenceAddress2.setHorizontalAlignment(Element.ALIGN_LEFT);
				firstReferenceAddress2.setVerticalAlignment(Element.ALIGN_MIDDLE);

				firstReferenceEmail2 = new PdfPCell(new Paragraph(r1.getEmail(), rightSideFont));
				firstReferenceEmail2.setPaddingLeft(5);
				firstReferenceEmail2.setBorderColor(BaseColor.WHITE);
				firstReferenceEmail2.setHorizontalAlignment(Element.ALIGN_LEFT);
				firstReferenceEmail2.setVerticalAlignment(Element.ALIGN_MIDDLE);
			}

			referencesTable.addCell(firstReferenceName1);
			referencesTable.addCell(firstReferenceName2);
			referencesTable.addCell(firstReferenceOccupation1);
			referencesTable.addCell(firstReferenceOccupation2);
			referencesTable.addCell(firstReferenceAddress1);
			referencesTable.addCell(firstReferenceAddress2);
			referencesTable.addCell(firstReferenceEmail1);
			referencesTable.addCell(firstReferenceEmail2);

			// ========End of First Reference Info=========//

			// ======== Start of Second Reference Info=========//
			// Name
			PdfPCell secondReferenceName1 = new PdfPCell(new Paragraph("b) Name : ", rightSideFont));
			secondReferenceName1.setBorderColor(BaseColor.WHITE);
			secondReferenceName1.setPaddingLeft(10);
			secondReferenceName1.setHorizontalAlignment(Element.ALIGN_LEFT);
			secondReferenceName1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell secondReferenceName2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			secondReferenceName2.setBorderColor(BaseColor.WHITE);

			// Occupations or Position
			PdfPCell secondReferenceOccupation1 = new PdfPCell(
					new Paragraph("   Occupation or Position : ", rightSideFont));
			secondReferenceOccupation1.setBorderColor(BaseColor.WHITE);
			secondReferenceOccupation1.setPaddingLeft(10);
			secondReferenceOccupation1.setHorizontalAlignment(Element.ALIGN_LEFT);
			secondReferenceOccupation1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell secondReferenceOccupation2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			secondReferenceOccupation2.setBorderColor(BaseColor.WHITE);

			// Address
			PdfPCell secondReferenceAddress1 = new PdfPCell(new Paragraph("   Address : ", rightSideFont));
			secondReferenceAddress1.setBorderColor(BaseColor.WHITE);
			secondReferenceAddress1.setPaddingLeft(10);
			secondReferenceAddress1.setHorizontalAlignment(Element.ALIGN_LEFT);
			secondReferenceAddress1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell secondReferenceAddress2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			secondReferenceAddress2.setBorderColor(BaseColor.WHITE);

			// Email
			PdfPCell secondReferenceEmail1 = new PdfPCell(new Paragraph("   Email : ", rightSideFont));
			secondReferenceEmail1.setBorderColor(BaseColor.WHITE);
			secondReferenceEmail1.setPaddingLeft(10);
			secondReferenceEmail1.setHorizontalAlignment(Element.ALIGN_LEFT);
			secondReferenceEmail1.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell secondReferenceEmail2 = new PdfPCell(new Paragraph("  ", rightSideFont));
			secondReferenceEmail2.setBorderColor(BaseColor.WHITE);

			if (empReferences.size() > 1) {
				Reference r2 = empReferences.get(1);
				secondReferenceName2 = new PdfPCell(new Paragraph(r2.getName(), rightSideFont));
				secondReferenceName2.setBorderColor(BaseColor.WHITE);
				secondReferenceName2.setPaddingLeft(5);
				secondReferenceName2.setHorizontalAlignment(Element.ALIGN_LEFT);
				secondReferenceName2.setVerticalAlignment(Element.ALIGN_MIDDLE);

				secondReferenceOccupation2 = new PdfPCell(new Paragraph(r2.getPosition(), rightSideFont));
				secondReferenceOccupation2.setBorderColor(BaseColor.WHITE);
				secondReferenceOccupation2.setPaddingLeft(5);
				secondReferenceOccupation2.setHorizontalAlignment(Element.ALIGN_LEFT);
				secondReferenceOccupation2.setVerticalAlignment(Element.ALIGN_MIDDLE);

				secondReferenceAddress2 = new PdfPCell(new Paragraph(r2.getAddress(), rightSideFont));
				secondReferenceAddress2.setBorderColor(BaseColor.WHITE);
				secondReferenceAddress2.setPaddingLeft(5);
				secondReferenceAddress2.setHorizontalAlignment(Element.ALIGN_LEFT);
				secondReferenceAddress2.setVerticalAlignment(Element.ALIGN_MIDDLE);

				secondReferenceEmail2 = new PdfPCell(new Paragraph(r2.getEmail(), rightSideFont));
				secondReferenceEmail2.setBorderColor(BaseColor.WHITE);
				secondReferenceEmail2.setPaddingLeft(5);
				secondReferenceEmail2.setHorizontalAlignment(Element.ALIGN_LEFT);
				secondReferenceEmail2.setVerticalAlignment(Element.ALIGN_MIDDLE);
			}

			referencesTable.addCell(secondReferenceName1);
			referencesTable.addCell(secondReferenceName2);
			referencesTable.addCell(secondReferenceOccupation1);
			referencesTable.addCell(secondReferenceOccupation2);
			referencesTable.addCell(secondReferenceAddress1);
			referencesTable.addCell(secondReferenceAddress2);
			referencesTable.addCell(secondReferenceEmail1);
			referencesTable.addCell(secondReferenceEmail2);
			document.add(referencesTable);

			// ===== End of Second Reference Info =====//

			// ======= Start of Educational Qualifications Table ======//
			Font f1 = new Font(FontFamily.TIMES_ROMAN, 10f, Font.BOLD);
			Paragraph eduqualHeading = new Paragraph("11. Educational Qualifications", f1);
			document.add(eduqualHeading);
			PdfPTable eduQualificationsTable = new PdfPTable(9);
			eduQualificationsTable.setWidthPercentage(100);
			eduQualificationsTable.setSpacingBefore(10f);
			eduQualificationsTable.setSpacingAfter(10f);

			// Set Column widths
			float[] eduQualificationsColums = { 1f, 1f, 1.1f, 1f, 1f, 1f, 1f, 1f, 1f };
			eduQualificationsTable.setWidths(eduQualificationsColums);

			Font eduQualsFont = new Font(Font.FontFamily.TIMES_ROMAN, 8f, Font.BOLD);
			Font eduQualsDataFont = new Font(Font.FontFamily.TIMES_ROMAN, 9f, Font.NORMAL);
			// Qualification
			PdfPCell qualification = new PdfPCell(new Paragraph("Qualification", eduQualsFont));
			qualification.setBorderColor(BaseColor.BLACK);
			qualification.setPaddingLeft(0);
			qualification.setHorizontalAlignment(Element.ALIGN_CENTER);
			qualification.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(qualification);
			// Subjects
			PdfPCell subjects = new PdfPCell(new Paragraph("Subjects", eduQualsFont));
			subjects.setBorderColor(BaseColor.BLACK);
			subjects.setPaddingLeft(0);
			subjects.setHorizontalAlignment(Element.ALIGN_CENTER);
			subjects.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(subjects);
			// University/Board
			PdfPCell board_university = new PdfPCell(new Paragraph("University|Board", eduQualsFont));
			board_university.setBorderColor(BaseColor.BLACK);
			board_university.setPaddingLeft(0);
			board_university.setHorizontalAlignment(Element.ALIGN_CENTER);
			board_university.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(board_university);
			// Year Of Passing
			PdfPCell yop = new PdfPCell(new Paragraph("Year Of Pass", eduQualsFont));
			yop.setBorderColor(BaseColor.BLACK);
			yop.setPaddingLeft(0);
			yop.setHorizontalAlignment(Element.ALIGN_CENTER);
			yop.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(yop);
			// Class Of Division
			PdfPCell divClass = new PdfPCell(new Paragraph("Class Of Division", eduQualsFont));
			divClass.setBorderColor(BaseColor.BLACK);
			divClass.setPaddingLeft(0);
			divClass.setHorizontalAlignment(Element.ALIGN_CENTER);
			divClass.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(divClass);
			// Max Marks
			PdfPCell maxMarks = new PdfPCell(new Paragraph("Max Marks", eduQualsFont));
			maxMarks.setBorderColor(BaseColor.BLACK);
			maxMarks.setPaddingLeft(0);
			maxMarks.setHorizontalAlignment(Element.ALIGN_CENTER);
			maxMarks.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(maxMarks);
			// Obtained Marks
			PdfPCell obtainedMarks = new PdfPCell(new Paragraph("Marks Obtained", eduQualsFont));
			obtainedMarks.setBorderColor(BaseColor.BLACK);
			obtainedMarks.setPaddingLeft(0);
			obtainedMarks.setHorizontalAlignment(Element.ALIGN_CENTER);
			obtainedMarks.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(obtainedMarks);
			// Percentage Of Marks
			PdfPCell percentage = new PdfPCell(new Paragraph("% of Marks", eduQualsFont));
			percentage.setBorderColor(BaseColor.BLACK);
			percentage.setPaddingLeft(0);
			percentage.setHorizontalAlignment(Element.ALIGN_CENTER);
			percentage.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(percentage);
			// Distinction
			PdfPCell distinction = new PdfPCell(new Paragraph("Distinction", eduQualsFont));
			distinction.setBorderColor(BaseColor.BLACK);
			distinction.setPaddingLeft(0);
			distinction.setHorizontalAlignment(Element.ALIGN_CENTER);
			distinction.setVerticalAlignment(Element.ALIGN_MIDDLE);
			eduQualificationsTable.addCell(distinction);
			// End of heading cells

			// Start Of Educational Qualifications Table Data
			List<EducationalQualificationsMapper> eduQualsList = employmentInfo.getQualificationsArrayMapper()
					.getEducationalQualificationsMapper();
			if (!eduQualsList.isEmpty()) {
				for (int i = 0; i < eduQualsList.size(); i++) {
					EducationalQualificationsMapper eqMapper = eduQualsList.get(i);
					// Qualification
					PdfPCell edqual = new PdfPCell(new Paragraph(eqMapper.getQualification(), eduQualsDataFont));
					edqual.setBorderColor(BaseColor.BLACK);
					edqual.setPaddingLeft(0);
					edqual.setHorizontalAlignment(Element.ALIGN_CENTER);
					edqual.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(edqual);
					// Subjects
					PdfPCell eqSubjects = new PdfPCell(new Paragraph(eqMapper.getSubjects(), eduQualsDataFont));
					eqSubjects.setBorderColor(BaseColor.BLACK);
					eqSubjects.setPaddingLeft(0);
					eqSubjects.setHorizontalAlignment(Element.ALIGN_CENTER);
					eqSubjects.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(eqSubjects);
					// University/Board
					PdfPCell eqUniversity = new PdfPCell(new Paragraph(eqMapper.getBoard(), eduQualsDataFont));
					eqUniversity.setBorderColor(BaseColor.BLACK);
					eqUniversity.setPaddingLeft(0);
					eqUniversity.setHorizontalAlignment(Element.ALIGN_CENTER);
					eqUniversity.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(eqUniversity);
					// Year Of Passing
					PdfPCell eyop = new PdfPCell(new Paragraph(eqMapper.getYearPassing().toString(), eduQualsDataFont));
					eyop.setBorderColor(BaseColor.BLACK);
					eyop.setPaddingLeft(0);
					eyop.setHorizontalAlignment(Element.ALIGN_CENTER);
					eyop.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(eyop);
					// Class Of Division
					PdfPCell edivClass = new PdfPCell(new Paragraph(eqMapper.getClassOfDivision(), eduQualsDataFont));
					edivClass.setBorderColor(BaseColor.BLACK);
					edivClass.setPaddingLeft(0);
					edivClass.setHorizontalAlignment(Element.ALIGN_CENTER);
					edivClass.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(edivClass);
					// Max Marks
					PdfPCell emaxMarks = new PdfPCell(
							new Paragraph(eqMapper.getMaxMarks().toString(), eduQualsDataFont));
					emaxMarks.setBorderColor(BaseColor.BLACK);
					emaxMarks.setPaddingLeft(0);
					emaxMarks.setHorizontalAlignment(Element.ALIGN_CENTER);
					emaxMarks.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(emaxMarks);
					// Obtained Marks
					PdfPCell eobtainedMarks = new PdfPCell(
							new Paragraph(eqMapper.getObtinedMarks().toString(), eduQualsDataFont));
					eobtainedMarks.setBorderColor(BaseColor.BLACK);
					eobtainedMarks.setPaddingLeft(0);
					eobtainedMarks.setHorizontalAlignment(Element.ALIGN_CENTER);
					eobtainedMarks.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(eobtainedMarks);
					// Percentage
					PdfPCell epercentage = new PdfPCell(new Paragraph(eqMapper.getPercentage(), eduQualsDataFont));
					epercentage.setBorderColor(BaseColor.BLACK);
					epercentage.setPaddingLeft(0);
					epercentage.setHorizontalAlignment(Element.ALIGN_CENTER);
					epercentage.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(epercentage);
					// Distinction
					PdfPCell edistinction = new PdfPCell(new Paragraph(eqMapper.getDistinction(), eduQualsDataFont));
					edistinction.setBorderColor(BaseColor.BLACK);
					edistinction.setPaddingLeft(0);
					edistinction.setHorizontalAlignment(Element.ALIGN_CENTER);
					edistinction.setVerticalAlignment(Element.ALIGN_MIDDLE);
					eduQualificationsTable.addCell(edistinction);
				}
			} else {
				document.add(new Paragraph("Educational Qualifications Data Not Available.\n"));
			}

			document.add(eduQualificationsTable);
			document.add(new Paragraph());

			// ======= End of Educational Qualifications Table ======//

			// ======= Start of Experience Details Table ======//
			Paragraph expDetailsHeading = new Paragraph("12. Experience Details", f1);
			document.add(expDetailsHeading);
			Font expDetailsHeadFont = new Font(Font.FontFamily.TIMES_ROMAN, 8f, Font.BOLD);
			PdfPTable expDetailsTable = new PdfPTable(5);
			expDetailsTable.setWidthPercentage(100);
			expDetailsTable.setSpacingBefore(10f);
			expDetailsTable.setSpacingAfter(10f);

			// Set Column widths
			float[] expdetailsTabColums = { 2f, 2f, 2f, 2f, 2f };
			expDetailsTable.setWidths(expdetailsTabColums);

			// Start of Heading cells
			// Name Of Employer
			PdfPCell employerName = new PdfPCell(new Paragraph("Name Of Employer", expDetailsHeadFont));
			employerName.setBorderColor(BaseColor.BLACK);
			employerName.setPaddingLeft(0);
			employerName.setHorizontalAlignment(Element.ALIGN_CENTER);
			employerName.setVerticalAlignment(Element.ALIGN_MIDDLE);
			expDetailsTable.addCell(employerName);

			// Designation
			PdfPCell designation = new PdfPCell(new Paragraph("Designation", expDetailsHeadFont));
			designation.setBorderColor(BaseColor.BLACK);
			designation.setPaddingLeft(0);
			designation.setHorizontalAlignment(Element.ALIGN_CENTER);
			designation.setVerticalAlignment(Element.ALIGN_MIDDLE);
			expDetailsTable.addCell(designation);

			// Nature Of Appointment
			PdfPCell natureOfAppointment = new PdfPCell(
					new Paragraph("Nature of Appoint\nregular/adhoc/contract\nper lecture basis", expDetailsHeadFont));
			natureOfAppointment.setBorderColor(BaseColor.BLACK);
			natureOfAppointment.setPaddingLeft(0);
			natureOfAppointment.setHorizontalAlignment(Element.ALIGN_CENTER);
			natureOfAppointment.setVerticalAlignment(Element.ALIGN_MIDDLE);
			expDetailsTable.addCell(natureOfAppointment);

			// Pay Scale / Total Salary
			PdfPCell salary = new PdfPCell(new Paragraph("Pay Scale / Total Salary", expDetailsHeadFont));
			salary.setBorderColor(BaseColor.BLACK);
			salary.setPaddingLeft(0);
			salary.setHorizontalAlignment(Element.ALIGN_CENTER);
			salary.setVerticalAlignment(Element.ALIGN_MIDDLE);
			expDetailsTable.addCell(salary);

			// Number of Years
			PdfPCell years = new PdfPCell(new Paragraph("Number Of Years", expDetailsHeadFont));
			years.setBorderColor(BaseColor.BLACK);
			years.setPaddingLeft(0);
			years.setHorizontalAlignment(Element.ALIGN_CENTER);
			years.setVerticalAlignment(Element.ALIGN_MIDDLE);
			expDetailsTable.addCell(years);

			// =======Start of Experience Details Table Data=======//
			List<ExperienceMapper> expDetailsList = employmentInfo.getExperiencedetails();
			if (!expDetailsList.isEmpty()) {
				for (int i = 0; i < expDetailsList.size(); i++) {
					ExperienceMapper expMapper = expDetailsList.get(i);

					// Name Of Employer
					PdfPCell expEmployerName = new PdfPCell(
							new Paragraph(expMapper.getNameOfEmployer(), rightSideFont));
					expEmployerName.setBorderColor(BaseColor.BLACK);
					expEmployerName.setPaddingLeft(0);
					expEmployerName.setHorizontalAlignment(Element.ALIGN_CENTER);
					expEmployerName.setVerticalAlignment(Element.ALIGN_MIDDLE);
					expDetailsTable.addCell(expEmployerName);

					// Designation
					PdfPCell expDesignation = new PdfPCell(new Paragraph(expMapper.getDesignation(), rightSideFont));
					expDesignation.setBorderColor(BaseColor.BLACK);
					expDesignation.setPaddingLeft(0);
					expDesignation.setHorizontalAlignment(Element.ALIGN_CENTER);
					expDesignation.setVerticalAlignment(Element.ALIGN_MIDDLE);
					expDetailsTable.addCell(expDesignation);

					// Nature Of Appointment
					PdfPCell expNatureOfAppointment = new PdfPCell(
							new Paragraph(expMapper.getEmploymentType(), rightSideFont));
					expNatureOfAppointment.setBorderColor(BaseColor.BLACK);
					expNatureOfAppointment.setPaddingLeft(0);
					expNatureOfAppointment.setHorizontalAlignment(Element.ALIGN_CENTER);
					expNatureOfAppointment.setVerticalAlignment(Element.ALIGN_MIDDLE);
					expDetailsTable.addCell(expNatureOfAppointment);

					// Pay Scale / Total Salary
					PdfPCell expSalary = new PdfPCell(new Paragraph(expMapper.getPay().toString(), rightSideFont));
					expSalary.setBorderColor(BaseColor.BLACK);
					expSalary.setPaddingLeft(0);
					expSalary.setHorizontalAlignment(Element.ALIGN_CENTER);
					expSalary.setVerticalAlignment(Element.ALIGN_MIDDLE);
					expDetailsTable.addCell(expSalary);

					// Number of Years
					PdfPCell expYears = new PdfPCell(
							new Paragraph(expMapper.getNumberOfYears().toString(), rightSideFont));
					expYears.setBorderColor(BaseColor.BLACK);
					expYears.setPaddingLeft(0);
					expYears.setHorizontalAlignment(Element.ALIGN_CENTER);
					expYears.setVerticalAlignment(Element.ALIGN_MIDDLE);
					expDetailsTable.addCell(expYears);

				}
			} else {
				document.add(new Paragraph("Work Experience Details Not Available.\n"));
			}

			// =======End Experience Details Table Data=======//

			document.add(expDetailsTable);
			// ======= End of Experience Details Table ======//

			document.add(new Paragraph(" "));
			Paragraph p13 = new Paragraph("13. Particulars of Prize, Medal and Merit won, Distinctions : ", f1);
			Paragraph p13Details = new Paragraph(employmentInfo.getPrizesAndMedals(), rightSideFont);
			document.add(p13);
			document.add(p13Details);

			document.add(new Paragraph(" "));
			Paragraph p131 = new Paragraph("14. Achievements : ", f1);
			document.add(p131);
			List<Achievement> achievements = employmentInfo.getAchievements();
			if (!achievements.isEmpty()) {
				for (int i = 0; i < achievements.size(); i++) {
					Achievement a = achievements.get(i);
					Paragraph achievemnt = new Paragraph("  " + i + ") " + a.getAchievementDetails(), rightSideFont);
					document.add(achievemnt);
				}
			}
			document.add(new Paragraph(" "));
			Paragraph p14 = new Paragraph("15.	List of the certificates (attested copies) attached- : ", f1);
			document.add(p14);
			List<Certificate> certificates = employmentInfo.getCertificates();
			if (!certificates.isEmpty()) {
				for (int i = 0; i < certificates.size(); i++) {
					Certificate c = certificates.get(i);
					Paragraph certificate = new Paragraph("  " + i + ") " + c.getCertificateName(), rightSideFont);
					document.add(certificate);
				}
			}
			document.add(new Paragraph(" "));
			Paragraph p15 = new Paragraph("16.	Additional information : ", f1);
			Paragraph p15Details = new Paragraph(employmentInfo.getAdditionalInfo(), rightSideFont);
			document.add(p15);
			document.add(p15Details);

			document.add(new Paragraph(" "));
			String declaration = "           I certify that the information given above & in the enclosed document are true to the best of my knowledge "
					+ ""
					+ "and belief and nothing has been concealed therein. I am aware of the fact that if the information given by me is proved false/not true, "
					+ ""
					+ "I will have to face the criminal proceedings as per provision of Section 177, 197, 198, 199 and 200 of IPC & any other suitable provision of the Law."
					+ ""
					+ " Also all the benefit availed by me shall be summarily withdrawn and my application shall liable for disqualification."
					+ "" + "\n\n Place : _______________________\n" + " Date : ____________________\n";

			Paragraph p16 = new Paragraph(declaration, rightSideFont);
			p16.setSpacingAfter(1.5f);
			document.add(p16);

			// Start of signatures table
			PdfPTable signaturesTable = new PdfPTable(3);
			signaturesTable.setSpacingBefore(3f);
			signaturesTable.setSpacingAfter(10f);
			signaturesTable.setWidthPercentage(85);
			float[] signaturesTableColumnWidths = { 2.5f, 2.5f, 2.5f };
			signaturesTable.setWidths(signaturesTableColumnWidths);

			// start of sign row 2
			PdfPCell signColTwo1 = new PdfPCell(new Paragraph(" ", rightSideFont));
			signColTwo1.setBorderColor(BaseColor.WHITE);
			PdfPCell signColTwo2 = new PdfPCell(Image.getInstance(sign));
			if (null != employmentInfo.getSignatureImage()) {
				signColTwo2 = new PdfPCell(Image.getInstance(employmentInfo.getSignatureImage()));
			}
			signColTwo2.setBorderColor(BaseColor.WHITE);
			signColTwo2.setPaddingLeft(10);
			signColTwo2.setHorizontalAlignment(Element.ALIGN_CENTER);
			signColTwo2.setVerticalAlignment(Element.ALIGN_MIDDLE);

			PdfPCell signColTwo3 = new PdfPCell(new Paragraph("___________________"));
			signColTwo3.setBorderColor(BaseColor.WHITE);

			signaturesTable.addCell(signColTwo1);
			signaturesTable.addCell(signColTwo2);
			signaturesTable.addCell(signColTwo3);

			// end of sign row 2

			// start of empty sign row 1
			PdfPCell signColOne1 = new PdfPCell(new Paragraph(" "));
			signColOne1.setBorderColor(BaseColor.WHITE);

			PdfPCell signColOne2 = new PdfPCell(new Paragraph("(Uploaded Signature)", rightSideFont));
			signColOne2.setBorderColor(BaseColor.WHITE);
			signColOne2.setHorizontalAlignment(Element.ALIGN_RIGHT);

			PdfPCell signColOne3 = new PdfPCell(new Paragraph("(Full Signature of Candidate)", rightSideFont));
			signColOne3.setBorderColor(BaseColor.WHITE);

			signaturesTable.addCell(signColOne1);
			signaturesTable.addCell(signColOne2);
			signaturesTable.addCell(signColOne3);
			// end of empty sign row 1

			// Adding Signatures Table
			document.add(signaturesTable);

			// Adding New Page
			document.newPage();
			String certificateHeadingContent = "CERTIFICATE FROM THE EMPLOYER, IF ANY";
			Paragraph certificateHeading = new Paragraph(certificateHeadingContent, leftSideFont);
			certificateHeading.setAlignment(Paragraph.ALIGN_CENTER);
			certificateHeading.setSpacingBefore(20f);
			certificateHeading.setSpacingAfter(15f);

			String certificateData = "The application of Miss/Mrs./Shri./Dr ..................................., who is at present working as "
					+ "...................................... in the ....................................... (Dept./Organization) is recommended and forwarded "
					+ "for consideration for the post of ................................. to the Registrar, Gurugram University, Gurugram."
					+ " "
					+ "In case, he/she is selected for employment in the Gurugram University, Gurugram he/she will be relieved of his/her present position.";
			Paragraph employerCertificate = new Paragraph(certificateData, rightSideFont);
			String spacingString = "\n\n\n\n";
			Paragraph spaceParagraph = new Paragraph(spacingString);
			String dateAndPlace = "Place .........................\n\nDate .........................";
			String signDescription = "   Signature of the Head   \n of the office/organization \n    (Seal Of Office)    ";
			float[] certificateTableColWidth = { 4f, 4f };
			PdfPTable certficateTable = new PdfPTable(certificateTableColWidth);
			certficateTable.setWidthPercentage(90);
			PdfPCell cellone = new PdfPCell(new Paragraph(dateAndPlace, rightSideFont));
			cellone.setHorizontalAlignment(Element.ALIGN_LEFT);
			cellone.setBorderColor(BaseColor.WHITE);
			PdfPCell celltwo = new PdfPCell(new Paragraph(signDescription, rightSideFont));
			celltwo.setHorizontalAlignment(Element.ALIGN_RIGHT);
			celltwo.setBorderColor(BaseColor.WHITE);
			certficateTable.addCell(cellone);
			certficateTable.addCell(celltwo);

			document.add(certificateHeading);
			document.add(employerCertificate);
			document.add(spaceParagraph);
			document.add(certficateTable);

			/* =============== END OF DOCUMENT ======================= */

			document.close();
			writer.close();

			response.setResponseMessage("Application Form Downloaded as PDF in Downloads folder.");
			response.setStatusCode(HttpStatus.OK.value());
		} catch (DocumentException e) {
			response.setResponseMessage("Unable to Create PDF file");
			response.setErrorMessage(e.getMessage());
			response.setStatusCode(HttpStatus.CONFLICT.value());
			e.printStackTrace();
		} catch (IOException e) {
			response.setResponseMessage("IO Exception Occured. Unable to Create PDF file");
			response.setErrorMessage(e.getMessage());
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			e.printStackTrace();
		} catch (Exception e) {
			response.setResponseMessage("Internal Server Error");
			response.setErrorMessage(e.getMessage());
			response.setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR.value());
			e.printStackTrace();
		}

		/*
		 * ResponseBuilder responseBuilder =
		 * javax.ws.rs.core.Response.ok((Object) document);
		 * responseBuilder.header("Content-Disposition",
		 * "attachment; filename="+filePath+"/ggu_application.pdf"); return
		 * responseBuilder.build();
		 */

		return response;
	}

	@Override
	public Map<String, Object> getApplicationInfoByApplicationId(String applicationId) {
		List<DemographicInfoMapper> demographicInfoByApplicationId = getDemographicInfoByApplicationId(applicationId);
		EmploymentInfoMapper employmentInfoByApplicationId = employmentInfoService
				.getEmploymentInfoByApplicationId(applicationId);

		Map<String, Object> applicationInfo = new HashMap<>();
		if (!CollectionUtils.isEmpty(demographicInfoByApplicationId) && null != employmentInfoByApplicationId) {
			applicationInfo.put("demographicInfo", demographicInfoByApplicationId.get(0));
			applicationInfo.put("employmentInfo", employmentInfoByApplicationId);
		}

		return applicationInfo;
	}

	@Override
	public List<DemographicInfoMapper> getDemographicInfoByApplicationId(String applicationId, String date,
			Long positionId) {
		List<DemographicInfoMapper> demographicInfoByApplicationId = demographicInfoDao
				.getDemographicInfoByApplicationId(applicationId, date, positionId);

		for (DemographicInfoMapper demographicInfoMapper : demographicInfoByApplicationId) {
			demographicInfoMapper
					.setAddresses(addressDao.getAddressesByDemographicInfoId(demographicInfoMapper.getId()));
		}
		return demographicInfoByApplicationId;
	}

}
