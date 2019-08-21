package com.imtac.recruitment.rest.resources;

import java.util.Date;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.CollectionUtils;

import com.imtac.recruitment.entity.Category;
import com.imtac.recruitment.entity.CategoryMapper;
import com.imtac.recruitment.response.Response;
import com.imtac.recruitment.service.CategoryService;

@Path("category")
public class CategoryResource {

	@Autowired
	private CategoryService categoryService;

	@POST
	@Path("/createCategory")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createCategory(CategoryMapper categoryMapper) {

		Category category = new Category();

		BeanUtils.copyProperties(categoryMapper, category);

		category.setStatus("Active");

		category.setUpdatedDate(new Date());
		Category newCategory = categoryService.createCategory(category);

		if (null != newCategory) {
			return new Response(newCategory, HttpStatus.CREATED, "new Category is created");
		} else {
			return new Response("Unable to create Category", HttpStatus.CONFLICT);
		}
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getAllCategories() {

		List<CategoryMapper> categoriesList = categoryService.getAllCategories();

		if (!CollectionUtils.isEmpty(categoriesList)) {
			return new Response(categoriesList, HttpStatus.OK, "Categories displayed");
		} else {
			return new Response("Unable to fetch categories", HttpStatus.CONFLICT);
		}
	}

	@PUT
	@Path("/updateCategory")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response updateCategory(CategoryMapper categoryMapper) {

		Category category = new Category();

		BeanUtils.copyProperties(categoryMapper, category);

		category.setStatus("Active");

		category.setUpdatedDate(new Date());

		Category createCategory = categoryService.updateCategory(category);

		if (null != createCategory) {
			return new Response(createCategory, HttpStatus.OK, "updated Category");
		} else {
			return new Response("Category not updatrd", HttpStatus.CONFLICT);
		}
	}

	@POST
	@Path("/deleteCategory")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response deleteCategory(Category category) {

		try {
			categoryService.deleteCategoryById(category);
		} catch (Exception ex) {
			ex.printStackTrace();
			return new Response("Category not deleted", HttpStatus.CONFLICT);
		}
		return new Response("Category  deleted", HttpStatus.OK);
	}

	@GET
	@Path("/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public Response getCategoryById(@PathParam("id") Long categoryId) {

		Category category = categoryService.getCategoryById(categoryId);

		if (null != category) {
			return new Response(category, HttpStatus.OK, "Categorys found");
		} else {
			return new Response("Category not found", HttpStatus.CONFLICT);
		}
	}
}
