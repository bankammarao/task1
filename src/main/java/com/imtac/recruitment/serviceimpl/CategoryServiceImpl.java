package com.imtac.recruitment.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.imtac.recruitment.dao.CategoryDao;
import com.imtac.recruitment.entity.Category;
import com.imtac.recruitment.entity.CategoryMapper;
import com.imtac.recruitment.service.CategoryService;

public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private CategoryDao categoryDao;
	

	@Override
	public Category createCategory(Category category) {
		return categoryDao.save(category);
	}

	@Override
	public List<CategoryMapper> getAllCategories() {
		return categoryDao.getAllCategories();
	}
	
	@Override
	public Category getCategoryById(Long categoryId) {
		return categoryDao.find(categoryId);
	}

	@Override
	public void deleteCategoryById(Category category) {
		categoryDao.deleteById(category);
	}

	@Override
	public Category updateCategory(Category category) {
		return categoryDao.save(category);
	}

}
