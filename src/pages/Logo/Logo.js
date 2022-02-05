import "./Logo.scss"
import {useEffect} from "react";
import Snap from "snapsvg-cjs"


const Logo = () => {
	useEffect(()=>{



		// let bigCircle = snapper.circle(50,50,50);
		// bigCircle.attr({
		// 	fill: 'green',
		// 	stroke: 'yellow',
		// 	strokeWidth: 5
		// });

		//let paper = Snap(1000,1000);

		// let cir = paper.circle(100,100,50);

		//let style = {
			//fill: 'red',
			//stroke: 'yellow',
			//strokeWidth: 5
		//};
		//
		// // cir.attr(style)
		//
		//
		//snapper = snapper
			//.path("M 10,50 L 100,200")
			//.attr(style)
		let paper = Snap('#Logo__svg');





		const pos = [
			{
				x: 235,
				y: 64
			},
			{
				x: 236,
				y: 170
			},
			{
				x: 280,
				y: 220
			},
			{
				x: 20,
				y: 320
			},
			{
				x: 235,
				y: 64
			},
		];

		const pos2 = [
			{
				x: 10,
				y: 17
			},
			{
				x: 70,
				y: 50
			},
			{
				x: 120,
				y: 150
			},
			{
				x: 158,
				y: 120
			},
			{
				x: 110,
				y: 17
			},
			{
				x: 10,
				y: 17
			},
		];

		let i = 0;

		// let renderNodes = (i) =>{
		//
		// 	const left = `${pos[i].x}`;
		// 	const top = `${pos[i].y}`;
		// 	paper
		// 		.circle(left, top, 0.5)
		// 		.attr({
		// 			fill: '#fff'
		// 		});
		// };


		const drawPath = (i) => {
			paper
				.path(`M ${pos[i].x}, ${pos[i].y}`)
				.attr({
					fill: 'red',
					stroke: 'yellow',
					strokeWidth: 1
				})
				.animate({d:`M ${pos[i].x}, ${pos[i].y} L ${pos[i+1].x}, ${pos[i+1].y}`}, 100,()=>{
					// renderNodes(i);

					// console.log(pos.length)
					//console.log(i)
					//drawPath(i+1)

					if (i < (pos.length - 2)) {
						drawPath(i+1)
					}


				})
				.animate({stroke:'#fff'},500)
		};


		drawPath(i);



		// let renderNodes2 = (i) =>{
		//
		// 	const left = `${pos2[i].x}`;
		// 	const top = `${pos2[i].y}`;
		// 	paper
		// 		.circle(left, top, 0.5)
		// 		.attr({
		// 			fill: '#fff'
		// 		});
		// };
		//
		//
		// const drawPath2 = (i) => {
		// 	paper
		// 		.path(`M ${pos2[i].x}, ${pos2[i].y}`)
		// 		.attr({
		// 			fill: 'red',
		// 			stroke: 'yellow',
		// 			strokeWidth: 1
		// 		})
		// 		.animate({d:`M ${pos2[i].x}, ${pos2[i].y} L ${pos2[i+1].x}, ${pos2[i+1].y}`}, 250,()=>{
		// 			renderNodes2(i);
		// 			drawPath2(i+1)
		// 		})
		// 		.animate({stroke:'#fff'},500)
		// };


		drawPath(i);
		// drawPath2(i);



	},[]);



	return (
		<div className="Logo">
			<svg className="Logo__svg" id="Logo__svg">

			</svg>
		</div>
	)
};

export default Logo;
