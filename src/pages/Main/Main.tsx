import { AiOutlineSearch } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
const defaultImage = require("../../images/default.png");
const arrowRight = require("../../images/arrowRight.png");

export const Main = () => {
	return (
		<div className="container">
			<div className="searchWrapper">
				<p className="searchWrapper__title">Filter by keywords</p>
				<div className="formInput">
					<AiOutlineSearch className="formInput__icon" />
					<input type="text" className="formInput__searchInput" />
				</div>
			</div>
			<div className="searchResult">
				<p className="searchResult__title">Results: 6</p>
			</div>
			<div className="cardsWrapper">
				<div className="cardArticle">
					<img src={defaultImage} alt="postImage" className="cardArticle__image" />
					<div className="cardArticle__content">
						<div className="datePublication">
							<CiCalendar className="datePublication__icon" />
							<p className="datePublication__date">June 29th, 2021</p>
						</div>
						<p className="cardArticle__title">
							The 2020 World's Most Valuable Brands
						</p>
						<p className="cardArticle__text">
							Non sed molestie tortor massa vitae in mattis. Eget vel consequat
							hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
							pharetra...
						</p>
						<Link to="details" className="navigateToMain">
							<p className="navigateToMain__text">Read more</p>
							<img
								src={arrowRight}
								alt="arrowRight"
								className="navigateToMain__icon"
							/>
						</Link>
					</div>
				</div>
				
				<div className="cardArticle"></div>
				<div className="cardArticle"></div>
				<div className="cardArticle"></div>
				<div className="cardArticle"></div>
				<div className="cardArticle"></div>
			</div>
		</div>
	);
};
