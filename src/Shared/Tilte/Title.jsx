import { PropTypes } from "prop-types";


const Title = ({subTitle, mainTitle}) => {
    return (
        <div className="text-center w-fit mx-auto">
            <p className="text-yellow-600 font-medium">{subTitle}</p>
            <h3 className="text-xl md:text-4xl font-medium py-6 border-y-2 my-4 uppercase">{mainTitle}</h3>
        </div>
    );
};
Title.propTypes = {
    subTitle : PropTypes.string,
    mainTitle : PropTypes.string
}
export default Title;