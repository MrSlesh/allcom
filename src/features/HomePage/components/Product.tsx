import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import i18next from 'i18next';
import moment from 'moment';

import { ProductDto } from '../../../types/product/ProductApiResponse';
import { CategoriesDto } from '../../categories/types/CategoriesDto';
import { getNameCategory } from '../../categories/utilsCategories';
import Timer from '../../../components/Timer/Timer';
import Tooltip from '../../../components/Tooltip/Tooltip';

import HeartIcon from '../../../img/svg/heart.svg?react';
import EyeIcon from '../../../img/svg/eye.svg?react';

interface ProductProps {
	product: ProductDto;
	categories: CategoriesDto[];
	setActiveWindow: (flag: boolean) => void;
	getProductById: (product_id: number) => void;
}

const Product: FC<ProductProps> = ({ product, setActiveWindow, getProductById, categories }) => {
	const {
		id,
		name,
		categoryId,
		imageLinks,
		lastCreatedAuction: { startPrice, startAt, currentPlannedEndAt },
	} = product;

	const locale = i18next.language;
	const { t } = useTranslation('home_page');

	const currentPlannedEnd = moment(currentPlannedEndAt);
	const formattedDate = moment(startAt).format('YYYY-MM-DD HH:mm:ss');
	const timeUntilCurrentPlannedEnd = currentPlannedEnd.diff(moment(), 'seconds');

	return (
		<div className="home_page__items">
			<div className="home_page__items--thumbnail">
				<img src={imageLinks[0]} alt="product-img"></img>
				<NavLink className="home_page__btn" to={`products/details/${id}`}>
					<span>{t('view_product')}</span>
				</NavLink>
				<ul className="home_page__items--action">
					<li className="home_page__items--action__list">
						<Tooltip text={t('add_to_wishlist')}>
							<button className="home_page__items--action__btn">
								<HeartIcon className="home_page__items--action__btn--svg" />
							</button>
						</Tooltip>
					</li>
					<li className="home_page__items--action__list">
						<Tooltip text={t('preview')}>
							<button
								className="home_page__items--action__btn"
								onClick={() => {
									setActiveWindow(true);
									getProductById(id);
								}}
							>
								<EyeIcon className="home_page__items--action__btn--svg" />
							</button>
						</Tooltip>
					</li>
				</ul>
			</div>
			<div className="home_page__items--content">
				<span className="home_page__items--content__subtitle">
					{t('category')}: {getNameCategory(categories, categoryId, locale)}
				</span>
				<h3 className="home_page__items--content__title">{name}</h3>
				<div className="home_page__items--priceAndTimer">
					<span className="home_page__current__price">{startPrice} &euro;</span>
					{timeUntilCurrentPlannedEnd > 0 ? (
						<Timer time={timeUntilCurrentPlannedEnd} />
					) : (
						<span className="home_page__items--priceAndTimer__format">{formattedDate}</span>
					)}
				</div>
			</div>
		</div>
	);
};

export default Product;
