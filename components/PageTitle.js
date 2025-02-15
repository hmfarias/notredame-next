/**
 * @description Returns an h2 element with a title.
 * @module components/PageTitle.js
 * @returns {JSX.Element} - the Page Title component
 * @exports PageTitle
 */
const PageTitle = ({ children = 'Page title' }) => {
	return <h2 className="mb-8 text-2xl md:text-3xl font-bold text-accent">{children}</h2>;
};
export default PageTitle;
