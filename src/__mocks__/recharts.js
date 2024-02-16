/* eslint-disable react/prop-types, import/no-unused-modules */
// IMPORTANT: this is a must in order to make the tests succeed
// the issues is that the default ResponsiveContainer, which is used in LineTimeChart
// does not have a width property. Therefore, during tests, it fails to render any chart
// which causes tests to not cover all lines.

// We have to use this in order for the snapshot to render all of the lines
const OriginalModule = jest.requireActual('recharts');

const ResponsiveContainer = ({ children }) => (
    <OriginalModule.ResponsiveContainer width={330} aspectRatio={1}>
        {children}
    </OriginalModule.ResponsiveContainer>
);

export * from 'recharts';
export { ResponsiveContainer };