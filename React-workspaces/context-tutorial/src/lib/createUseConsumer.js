import React from 'react';

const createUseConsumer = (Consumer) => (mapContextToProps) => (WrappedComponent) => {
    // map ContextToProps 가 없으면 그냥 Context를 그대로 props에 전달
    const defaultMapContextToProps = (context) => ({context});

    function UseConsumer(props) {
        return(
            <Consumer>
                {
                    context => {
                        // context에서 원하는 값 추출
                        const contextProps = (mapContextToProps || defaultMapContextToProps)(context);
                        return(
                            <WrappedComponent {...contextProps} {...props} />
                        );
                    }
                }
            </Consumer>
        );
    }
    // displayname 설정
    const displayName = WrappedComponent.displayName || WrappedComponent.name || 'component';
    UseConsumer.displayName = `UseConsumer(${displayName})`;
    return UseConsumer;
}

export default createUseConsumer