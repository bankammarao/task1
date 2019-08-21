package com.imtac.recruitment.dao;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Query;
import javax.transaction.Transactional;

import com.imtac.recruitment.entity.Category;
import com.imtac.recruitment.entity.CategoryMapper;

public class JpaCategoryDao extends JpaDao<Category, Long> implements CategoryDao {

	public JpaCategoryDao() {
		super(Category.class);
	}

	@Transactional
	@Override
	public int deleteById(Category category) {
		Query query = getEntityManager().createNativeQuery("update category set category_status='"
				+ category.getStatus() + "' where category_id=" + category.getId());
		return query.executeUpdate();
	}

	@Override
	public List<CategoryMapper> getAllCategories() {
		Query query = getEntityManager().createNativeQuery(
				"select c.category_id,c.category_name,c.category_updatedBy,c.category_updatedDate,c.category_status,u.username from category c,users u where c.category_updatedBy=u.id order by c.category_id desc");
		List<Object[]> categoryList = query.getResultList();
		List<CategoryMapper> categoryMapperList = new ArrayList<CategoryMapper>();

		for (Object[] object : categoryList) {
			CategoryMapper categoryMapper = new CategoryMapper();
			categoryMapper.setId(Long.parseLong(object[0] + ""));
			categoryMapper.setCategoryName((object[1] + ""));
			categoryMapper.setLastUpdatedBy(Long.parseLong(object[2] + ""));
			categoryMapper.setUpdatedDate((Date) object[3]);
			categoryMapper.setStatus(object[4] + "");
			categoryMapper.setEmail(object[5] + "");
			categoryMapperList.add(categoryMapper);
		}
		return categoryMapperList;
	}

}
