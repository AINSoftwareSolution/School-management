import { ContainerProps } from '../utilis/type';

const Container: React.FC<ContainerProps> = ({ children, id }) => {
    return (
        <div className="container mx-auto max-w-screen-xl py-12" id={id}>
            {children}
        </div>
    );
};

export default Container;
