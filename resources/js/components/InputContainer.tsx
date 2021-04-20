import { Box } from "@material-ui/core";
import React from "react";

const styles = {
    marginBottom: 20,
};

interface ContainerProps {
    children: React.ReactChild;
}

const InputContainer: React.FC<ContainerProps> = ({ children }) => {
    return (
        <Box component="div" style={styles}>
            {children}
        </Box>
    );
};

export default InputContainer;
