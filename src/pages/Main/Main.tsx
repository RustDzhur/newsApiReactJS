import { AiOutlineSearch } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchArticles } from "../../components/API/Api";
const defaultImage = require("../../images/default.png");
const arrowRight = require("../../images/arrowRight.png");

export const Main = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetchArticles().then(res => setArticles(res));
	}, []);

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
				{articles.map(({ id, title, publishedAt, imageUrl, url, summary }) => (
					<div className="cardArticle" key={id}>
						<img
							src={imageUrl}
							alt="postImage"
							className="cardArticle__image"
						/>
						<div className="cardArticle__content">
							<div className="datePublication">
								<CiCalendar className="datePublication__icon" />
								<p className="datePublication__date">{publishedAt}</p>
							</div>
							<p className="cardArticle__title">
								{title}
							</p>
							<p className="cardArticle__text">
								{summary}
							</p>
							<Link to={url} className="navigateToMain">
								<p className="navigateToMain__text">Read more</p>
								<img
									src={arrowRight}
									alt="arrowRight"
									className="navigateToMain__icon"
								/>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
