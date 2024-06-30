import React from 'react';
import {format} from "date-fns";

const ReviewElement = (props) => {

	let reviewEl = props.review;
	const formattedDate = format(new Date(reviewEl.createdAt), 'dd MMM yy HH:mm');

	return (
		<div>
			<div className="my-3 p-3 bg-body rounded shadow-sm">

				<div className="d-flex text-body-secondary pt-1 border-bottom">
					<svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
						  xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
						  preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
						<rect width="100%" height="100%" fill="#6f42c1"></rect>
						<text x="50%" y="50%" fill="#6f42c1" dy=".3em">32x32</text>
					</svg>

					<div className="d-flex w-100 align-items-center justify-content-between">
						<div>
							<p className="pb-3 mb-0 small lh-sm">
								<strong
									className="d-block text-gray-dark">{reviewEl.customer.firstName} {reviewEl.customer.lastName}</strong>
								{reviewEl.comment}
							</p>
						</div>

						<div className="d-flex flex-column align-items-center">
							<small>{reviewEl.rating} ⭐</small>
							<small className="text-body-secondary">{formattedDate}</small>
						</div>

					</div>
				</div>

			</div>

		</div>
	)
}

export default ReviewElement;