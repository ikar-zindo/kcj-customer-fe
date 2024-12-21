import React from 'react';
import Preloader from "../components/common/Preloader";

interface WithSuspenseProps {
	Component: React.ComponentType;
}

const WithSuspense: React.FC<WithSuspenseProps> = ({ Component }) => {
	return (
		<React.Suspense fallback={<Preloader />}>
			<Component />
		</React.Suspense>
	);
};

export default WithSuspense;
