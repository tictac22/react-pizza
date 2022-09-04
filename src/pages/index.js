import { Helmet } from "react-helmet"
import Filter from "../components/filter"
import { HomeWrapper } from "../components/pages/homeWrapper"

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Menu</title>
			</Helmet>
			<main>
				<Filter />
				<HomeWrapper />
			</main>
		</>
	)
}
