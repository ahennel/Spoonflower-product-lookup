import React from 'react';

interface Props {
	updateProduct: (val: string) => void;
}

const ProductFilter: React.FC<Props> = ({ updateProduct }) => {
	return (
		<div
			style={{
				marginTop: '1rem',
			}}>
			<label htmlFor='product-filter'>Products</label>
			<select
				id='product-filter'
				defaultValue='Fabric'
				onChange={e => updateProduct(e.target.value)}>
				<option value='Fabric,Wallpaper,Bedding,Dining,Living_Decor'>
					All Products
				</option>
				<option value='Fabric'>Fabrics</option>
				<option value='Wallpaper'>Wallpaper</option>
				<option value='Dining'>Dining</option>
				<option value='Living_Decor'>Living &amp; Decor</option>
				<option value='Bedding'>Bedding</option>
			</select>
		</div>
	);
};

export default ProductFilter;
