package com.imtac.recruitment.dao;

import java.util.List;

import com.imtac.recruitment.entity.Category;
import com.imtac.recruitment.entity.CategoryMapper;

public interface CategoryDao extends Dao<Category, Long> {

	List<CategoryMapper> getAllCategories();

	int deleteById(Category category);

}
