package com.imtac.recruitment.service;

import java.util.List;

import com.imtac.recruitment.entity.Category;
import com.imtac.recruitment.entity.CategoryMapper;

public interface CategoryService {

	Category createCategory(Category category);

	List<CategoryMapper> getAllCategories();

	Category getCategoryById(Long categoryId);

	void deleteCategoryById(Category category);

	Category updateCategory(Category category);

}
