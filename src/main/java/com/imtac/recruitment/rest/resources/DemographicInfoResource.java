package com.imtac.recruitment.rest.resources;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.glassfish.jersey.media.multipart.FormDataContentDisposition;
import org.glassfish.jersey.media.multipart.FormDataParam;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;

import com.imtac.recruitment.entity.Address;
import com.imtac.recruitment.entity.DemographicInfo;
import com.imtac.recruitment.entity.DemographicInfoMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.DemographicInfoService;
import com.imtac.recruitment.service.EmploymentInfoService;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.Font.FontFamily;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Rectangle;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfWriter;

@Path("demographicinfo")
public class DemographicInfoResource {

	@Autowired
	DemographicInfoService demographicInfoService;

	@Autowired
	EmploymentInfoService employmentInfoService;

	@POST
	@Path("/saveDemographicInfo")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response saveDemographicInfo(DemographicInfoMapper demographicInfoMapper) throws IOException {

		DemographicInfo demographic = new DemographicInfo();

		BeanUtils.copyProperties(demographicInfoMapper, demographic);

		demographic.setUpdatedDate(new Date());

		DemographicInfo savedDemographicInfo = demographicInfoService.saveDemographicInfo(demographic);

		if (null != savedDemographicInfo) {
			if (!CollectionUtils.isEmpty(demographicInfoMapper.getAddresses())) {
				demographicInfoService.saveAddresses(demographicInfoMapper.getAddresses(),
						savedDemographicInfo.getId());
			}
			return new Response(savedDemographicInfo, HttpStatus.CREATED, "Demographic information saved");
		} else {
			return new Response("unable to save demographic information", HttpStatus.CONFLICT);
		}
	}

	@PUT
	@Path("/updateDemographicInfo")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateDemographic(DemographicInfoMapper demographicInfoMapper) throws IOException {

		DemographicInfo demographic = new DemographicInfo();

		BeanUtils.copyProperties(demographicInfoMapper, demographic);

		demographic.setUpdatedDate(new Date());

		DemographicInfo updatedDemographicInfo = demographicInfoService.updateDemographicInfo(demographic);

		if (null != updatedDemographicInfo) {
			if (!CollectionUtils.isEmpty(demographicInfoMapper.getAddresses())) {
				demographicInfoService.saveAddresses(demographicInfoMapper.getAddresses(),
						updatedDemographicInfo.getId());
			}
			return new Response(updatedDemographicInfo, HttpStatus.OK, "Demographic information updated");
		} else {
			return new Response("unable to update demographic information", HttpStatus.CONFLICT);
		}
	}

	/*
	 * @DELETE
	 * 
	 * @Path("/deleteDemographicInfo")
	 * 
	 * @Produces(MediaType.APPLICATION_JSON)
	 * 
	 * @Consumes(MediaType.APPLICATION_JSON) public Response
	 * deleteDemographicInfo(DemographicInfo demographicInfo) {
	 * 
	 * try { demographicInfoService.deleteDemographicInfoById(demographicInfo);
	 * } catch (Exception ex) { ex.printStackTrace(); return new
	 * Response("unable to delete demographic information",
	 * HttpStatus.CONFLICT); } return new
	 * Response("demographic information  deleted", HttpStatus.OK); }
	 */
	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getDemographicInfoById(@PathParam("id") Long id) {

		DemographicInfoMapper demographicInfoMapper = new DemographicInfoMapper();
		DemographicInfo demographicInfo = demographicInfoService.getDemographicInfoById(id);

		if (null != demographicInfo) {
			BeanUtils.copyProperties(demographicInfo, demographicInfoMapper);
			List<Address> addressesByDemographicInfoById = demographicInfoService.getAddressesByDemographicInfoById(id);
			if (!CollectionUtils.isEmpty(addressesByDemographicInfoById)) {
				demographicInfoMapper.setAddresses(addressesByDemographicInfoById);
			}
			return new Response(demographicInfoMapper, HttpStatus.OK, "Demographic information found");
		} else {
			return new Response("unable to find demographic information", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Path("/getDemographicInfoByUserId/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getDemographicInfoByUserId(@PathParam("id") Long id) {

		List<DemographicInfoMapper> demographicInfo = demographicInfoService.getDemographicInfoByUserId(id);

		if (!CollectionUtils.isEmpty(demographicInfo)) {
			return new Response(demographicInfo, HttpStatus.OK, "Demographic information found");
		} else {
			return new Response("unable to find demographic information", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/fileupload")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.MULTIPART_FORM_DATA)
	public Response fileUpload(@FormDataParam("aadhar") InputStream aadharIs,
			@FormDataParam("aadhar") FormDataContentDisposition aadharFileDetails,
			@FormDataParam("exService") InputStream exServiceIs,
			@FormDataParam("exService") FormDataContentDisposition exServiceFileDetails) throws IOException {

		System.out.println(aadharFileDetails.getFileName());
		System.out.println(exServiceFileDetails.getFileName());

		return new Response(HttpStatus.OK, "Demographic information found");
	}

	@Path("/generateAndAndDownPdfFile/{applicationId}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response generateAndAndDownPdfFile(@PathParam("applicationId") String applicationId) {
		return demographicInfoService.generateAndAndDownPdfFile(applicationId);

	}

	@GET
	@Path("/getApplicationInfo/{applicationId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getApplicationInfoByApplicationId(@PathParam("applicationId") String applicationId) {

		Map<String, Object> applicationInfo = demographicInfoService.getApplicationInfoByApplicationId(applicationId);

		if (!CollectionUtils.isEmpty(applicationInfo)) {
			return new Response(applicationInfo, HttpStatus.OK, "Application Info found");
		}
		return new Response(HttpStatus.CONFLICT, "Unable to find application info not found");

	}

	@GET
	@Path("/getApplications")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getApplications() {

		List<DemographicInfoMapper> demographicInfo = demographicInfoService.getDemographicInfoByApplicationId(null);
		/*
		 * EmploymentInfoMapper employmentInfoByApplicationId =
		 * employmentInfoService
		 * .getEmploymentInfoByApplicationId(applicationId);
		 */
		Map<String, Object> applicationInfo = new HashMap<>();
		if (!CollectionUtils.isEmpty(demographicInfo)) {
			applicationInfo.put("demographicInfo", demographicInfo);
		}

		return new Response(applicationInfo, HttpStatus.OK, "Application Info found");

	}

	@GET
	@Path("/excelDownload")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response excelDownload() throws IOException {

		String[] columns = { "Application Number", "Full Name", "Gender", "Date Of Birth", "Email", "Mobile Number",
				"Aadhar Number", "Category", "Age", "Father's name", "Mother's Name", "Position Name", "Nationality",
				"Birth Place", "Matrial Status", "Ex-Service Man" };

		List<DemographicInfoMapper> demographicInfoByApplicationId = demographicInfoService
				.getDemographicInfoByApplicationId(null);

		Workbook workbook = new XSSFWorkbook();
		CreationHelper createHelper = workbook.getCreationHelper();

		// Create a Sheet
		Sheet sheet = workbook.createSheet("Applications_List");

		// Create a Font for styling header cells
		Font headerFont = workbook.createFont();
		headerFont.setBold(true);
		headerFont.setFontHeightInPoints((short) 14);
		headerFont.setColor(IndexedColors.BLACK.getIndex());

		// Create a CellStyle with the font
		CellStyle headerCellStyle = workbook.createCellStyle();
		headerCellStyle.setFont(headerFont);

		// Create a Row
		Row headerRow = sheet.createRow(0);

		// Create cells
		for (int i = 0; i < columns.length; i++) {
			Cell cell = headerRow.createCell(i);
			cell.setCellValue(columns[i]);
			cell.setCellStyle(headerCellStyle);
		}

		// Create Cell Style for formatting Date
		CellStyle dateCellStyle = workbook.createCellStyle();
		dateCellStyle.setDataFormat(createHelper.createDataFormat().getFormat("dd-MM-yyyy"));

		// Create Other rows and cells with employees data
		int rowNum = 1;
		if (!CollectionUtils.isEmpty(demographicInfoByApplicationId)) {
			for (DemographicInfoMapper demographicInfoMapper : demographicInfoByApplicationId) {
				Row row = sheet.createRow(rowNum++);

				row.createCell(0).setCellValue(demographicInfoMapper.getApplicationNo());
				row.createCell(1).setCellValue(demographicInfoMapper.getFullName());
				row.createCell(2).setCellValue(demographicInfoMapper.getGender());
				Cell dateOfBirthCell = row.createCell(3);
				dateOfBirthCell.setCellValue(demographicInfoMapper.getDob());
				dateOfBirthCell.setCellStyle(dateCellStyle);
				row.createCell(4).setCellValue(demographicInfoMapper.getEmailId());
				row.createCell(5).setCellValue(demographicInfoMapper.getMobileNumber());
				row.createCell(6).setCellValue(demographicInfoMapper.getAadharNumber());
				row.createCell(7).setCellValue(demographicInfoMapper.getCategoryName());
				row.createCell(8).setCellValue(demographicInfoMapper.getCurrentAge());
				row.createCell(9).setCellValue(demographicInfoMapper.getFatherName());
				row.createCell(10).setCellValue(demographicInfoMapper.getMotherName());
				row.createCell(11).setCellValue(demographicInfoMapper.getPossitionAppliedFor());
				row.createCell(12).setCellValue(demographicInfoMapper.getNationality());
				row.createCell(13).setCellValue(demographicInfoMapper.getPlaceOfBirth());
				row.createCell(14).setCellValue(demographicInfoMapper.getMaritalStatus());
				row.createCell(15).setCellValue(demographicInfoMapper.isExServiceMan());

			}
		}

		// Resize all columns to fit the content size
		for (int i = 0; i < columns.length; i++) {
			sheet.autoSizeColumn(i);
		}

		// Write the output to a file
		FileOutputStream fileOut = new FileOutputStream(
				"D:\\apache-tomcat-9.0.20-windows-x64\\apache-tomcat-9.0.20\\webapps\\report\\applications-list.xlsx");
		workbook.write(fileOut);
		fileOut.close();

		// Closing the workbook
		workbook.close();

		return new Response(HttpStatus.OK, "Demographic information found");
	}

	@GET
	@Path("/printReceipt")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response printReceipt() throws IOException, DocumentException {

		List<DemographicInfoMapper> demographicInfoByApplicationId = demographicInfoService
				.getDemographicInfoByApplicationId(null);

		Map<String, String> map = new LinkedHashMap<>();
		map.put("Account No:", "sdasfa");
		map.put("Position Name", "sdasfa");
		map.put("Application No", "sdasfa");
		map.put("Applicant's Name", "sdasfa");
		map.put("Father's Name", "sdasfa");
		map.put("Date of Birth", "sdasfa");
		map.put("Mobile No", "sdasfa");
		map.put("Applied Category", "sdasfa");
		map.put("Position Type", "sdasfa");
		map.put("Application Fee", "sdasfa");
		map.put("Date of Deposit", "sdasfa");
		map.put("Auth. Signature ", "sdasfa");
		map.put("Online Payment Details", "sdasfa");
		map.put("Amount Received", "sdasfa");
		map.put("SOL/Branch ID", "sdasfa");
		map.put("Date of Deposit ", "sdasfa");
		map.put("Auth. Signature", "sdasfa");
		map.put("Branch Seal", "sdasfa");
		map.put("Depositor Name", "sdasfa");

		Document document = new Document();
		PdfWriter writer = PdfWriter.getInstance(document, new FileOutputStream(
				"D:\\apache-tomcat-9.0.20-windows-x64\\apache-tomcat-9.0.20\\webapps\\report\\AddTableExample.pdf"));
		document.open();

		PdfPTable headerTable = new PdfPTable(3); // 3 columns.
		headerTable.setWidthPercentage(100); // Width 100%

		float[] headColumnsWidths = { 1f, 1f, 1f };
		headerTable.setWidths(headColumnsWidths);

		com.itextpdf.text.Font headerFont = new com.itextpdf.text.Font(FontFamily.HELVETICA, 11,
				com.itextpdf.text.Font.BOLD);
		com.itextpdf.text.Font textFont = new com.itextpdf.text.Font(FontFamily.HELVETICA, 10,
				com.itextpdf.text.Font.NORMAL);

		PdfPCell headText1 = new PdfPCell(new Paragraph("CANDIDATE COPY", headerFont));
		PdfPCell headText2 = new PdfPCell(new Paragraph("BANK COPY", headerFont));
		PdfPCell headText3 = new PdfPCell(new Paragraph("UNIVERSITY COPY", headerFont));
		PdfPCell headText4 = new PdfPCell(new Paragraph("Gurugram University, Gurugram", headerFont));
		headText1.setBorder(Rectangle.NO_BORDER);
		headText2.setBorder(Rectangle.NO_BORDER);
		headText3.setBorder(Rectangle.NO_BORDER);
		headText4.setBorder(Rectangle.NO_BORDER);
		headText1.setHorizontalAlignment(Element.ALIGN_CENTER);
		headText2.setHorizontalAlignment(Element.ALIGN_CENTER);
		headText3.setHorizontalAlignment(Element.ALIGN_CENTER);
		headText4.setHorizontalAlignment(Element.ALIGN_CENTER);

		headText1.setBorder(Rectangle.NO_BORDER);
		headText2.setBorder(Rectangle.NO_BORDER);
		headText3.setBorder(Rectangle.NO_BORDER);

		headerTable.addCell(headText1);
		headerTable.addCell(headText2);
		headerTable.addCell(headText3);

		headerTable.addCell(headText4);
		headerTable.addCell(headText4);
		headerTable.addCell(headText4);

		Image image = Image.getInstance("D:\\icici-logo.png");
		image.setWidthPercentage(25);
		PdfPCell headImage = new PdfPCell(image);
		headImage.setPadding(10);

		headImage.setBorder(Rectangle.NO_BORDER);
		headImage.setHorizontalAlignment(Element.ALIGN_CENTER);
		headerTable.addCell(headImage);
		headerTable.addCell(headImage);
		headerTable.addCell(headImage);

		PdfPCell headText5 = new PdfPCell(new Paragraph("ONLINE"));
		headText5.setBorder(Rectangle.NO_BORDER);
		headText5.setHorizontalAlignment(Element.ALIGN_CENTER);
		headerTable.addCell(headText5);
		headerTable.addCell(headText5);
		headerTable.addCell(headText5);

		document.add(headerTable);

		PdfPTable table = new PdfPTable(6); // 6 columns.
		table.setWidthPercentage(100); // Width 100%
		table.setSpacingBefore(10f); // Space before table
		table.setSpacingAfter(10f); // Space after table

		// Set Column widths
		float[] columnWidths = { 1f, 1f, 1f, 1f, 1f, 1f };
		table.setWidths(columnWidths);

		for (Map.Entry<String, String> entry : map.entrySet()) {

			if (entry.getKey().equalsIgnoreCase("Account No:")
					|| entry.getKey().equalsIgnoreCase("Online Payment Details")) {

				PdfPCell head1 = new PdfPCell(new Paragraph(entry.getKey(), headerFont));
				head1.setColspan(2);
				head1.setPadding(8);

				PdfPCell head2 = new PdfPCell(new Paragraph(entry.getKey(), headerFont));
				head2.setColspan(2);
				head2.setPadding(8);

				PdfPCell head3 = new PdfPCell(new Paragraph(entry.getKey(), headerFont));
				head3.setColspan(2);
				head3.setPadding(8);

				table.addCell(head1);
				table.addCell(head2);
				table.addCell(head3);

			} else {

				PdfPCell cell1 = new PdfPCell(new Paragraph(entry.getKey(), textFont));
				cell1.setPadding(8);

				PdfPCell cell2 = new PdfPCell(new Paragraph(entry.getValue(), textFont));
				cell2.setPadding(8);

				PdfPCell cell3 = new PdfPCell(new Paragraph(entry.getKey(), textFont));
				cell3.setPadding(8);

				PdfPCell cell4 = new PdfPCell(new Paragraph(entry.getValue(), textFont));
				cell4.setPadding(8);

				PdfPCell cell5 = new PdfPCell(new Paragraph(entry.getKey(), textFont));
				cell5.setPadding(8);

				PdfPCell cell6 = new PdfPCell(new Paragraph(entry.getValue(), textFont));
				cell6.setPadding(8);

				// To avoid having the cell border and the content overlap, if
				// you
				// are
				// having thick cell borders
				// cell1.setUserBorderPadding(true);
				// cell2.setUserBorderPadding(true);
				// cell3.setUserBorderPadding(true);

				table.addCell(cell1);
				table.addCell(cell2);
				table.addCell(cell3);
				table.addCell(cell4);
				table.addCell(cell5);
				table.addCell(cell6);
			}
		}
		document.add(table);

		document.close();
		writer.close();
		return new Response(HttpStatus.OK, "Demographic information found");

	}

	@GET
	@Path("/searchApplications")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response searchApplications(@QueryParam("date") String date, @QueryParam("position") Long positionId) {

		List<DemographicInfoMapper> demographicInfo = demographicInfoService.getDemographicInfoByApplicationId(null,
				date, positionId);
		/*
		 * EmploymentInfoMapper employmentInfoByApplicationId =
		 * employmentInfoService
		 * .getEmploymentInfoByApplicationId(applicationId);
		 */
		Map<String, Object> applicationInfo = new HashMap<>();
		if (!CollectionUtils.isEmpty(demographicInfo)) {
			applicationInfo.put("demographicInfo", demographicInfo);
		}

		return new Response(applicationInfo, HttpStatus.OK, "Application Info found");

	}

	@GET
	@Path("/getDemographicInfo/{applicationId}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getDemographicInfoByApplicationId(@PathParam("applicationId") String applicationId) {

		DemographicInfoMapper demographicInfoByApplicationId = demographicInfoService
				.getDemographicInfoByApplicationId(applicationId).get(0);

		if (null != demographicInfoByApplicationId) {
			return new Response(demographicInfoByApplicationId, HttpStatus.OK, "Demographic Info found");
		}
		return new Response(HttpStatus.CONFLICT, "Unable to find demographic info not found");

	}

}
