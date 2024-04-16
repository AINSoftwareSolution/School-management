import { ContainerProps } from '../app/utilis/type';

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto max-w-screen-xl mt-5 ">
            {children}
        </div>
    );
};

export default Container;
