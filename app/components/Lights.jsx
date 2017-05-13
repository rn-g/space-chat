import React from 'react'
//import Avatar from './Avatar'  // not rendering
import AssetLoader from './AssetLoader'

/* -------------
props - prevEmotion, currEmotion, prevIntensity, currIntensity
# intensity will equal duration of rotation of light mixins
# emotion will dictate colors of lights
------------- */

// Component with camera, skysphere, lights
const Lights = (props) => {

	// emotion controls light color
	// let emotionColors = {
	// 	anger: '#FF0000',     // red
 //    surprise: '#FF8300',  // orange
 //    sadness: '#20A7D2',   // blue
 //    fear: '#494850',      // dark grey
 //    joy: '#FBFF00'        // yellow
	// }

	// let fixedLightA_color = {
	// 	anger: '#FF0000',     // red
	// 	surprise:
	// 	sadness:
	// 	fear:
	// 	joy:
	// }

	// let fixedLightB_color = {
	// 	anger: '#FF8300',  // orange
	// 	surprise:
	// 	sadness:
	// 	fear:
	// 	joy:
	// }

	// // sentiment controls rate of lights spinning
	// let sentimentRate = {
	// 	//duration conversion
	// }

// functions for producing knot shapes in scene
// adapted from: https://github.com/aframevr/aframe/blob/master/examples/showcase/dynamic-lights/index.html 
const createShapes = () => {
	console.log('inside createShapes')
	// Helper functions
	const getRandColor = () => {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
	}

	const getRandCoord = () => {
	  var coord = Math.random() * 60;
	  return Math.random() < 0.5 ? coord + 5 : coord * -1 - 5;
	}

	// Generate random knots
	for (var i=0; i<120; i++) {
	console.log('inside createShapes 2')
	  return (
			<a-entity
				geometry={`
	  			primitive: torusKnot;
	    		radius: ${Math.random() * 10};
	    		radiusTubular: ${ Math.random() * 0.75 };
	    		p: ${ Math.round(Math.random() * 10)};
	    		q: ${ Math.round(Math.random() * 10) }
	    	`}
				material={`
	    		color: ${getRandColor()};
	    		metalness: ${Math.random()};
	    		roughness: ${Math.random()}
				`}
				position={`
	    		x: ${getRandCoord()};
	    		y: ${getRandCoord()};
	    		z: ${getRandCoord()}
				`}
			/>
		)
	}
}


	return (
		<div>
	   <a-scene fog="type: exponential; color: purple">
				<AssetLoader />
				<a-assets>
	        <a-mixin id="light" geometry="primitive: sphere; radius: 1.5"
	                 material="color: black; shader: flat"
	                 light="color: #DDDDFF; distance: 120; intensity: 2; type: point">
	        </a-mixin>
	        <a-mixin id="torus-knot" geometry="primitive: torusKnot"
	                 material="color: red">
	        </a-mixin>
	      </a-assets>

	      {/* Attempt to generate random shapes not working
	      { createShapes() }
	    	*/}

	      {/* Avatar + Targeted Lights */}
	      <a-entity id="avatar"
	      geometry="primitive: torusKnot; radius: 3"
	      	position="-1 1.25 -5"
	      	material="color: white"
	      	metalness=".9"
	      	roughness="-2" />
        <a-light id="fixedLightA" color="blue" angle="90" radius="60" position="-3 -4 1" type="point" distance="0" intensity="3" target="avatar" />
        <a-light id="fixedLightB" color="green" angle="-90" radius="60" position="2 4 1" type="point" distance="0" intensity="2" target="avatar" />

		    {/* Camera:
		    	# Position should always be placed on an entity wrapper around camera.
		    	# fov = field of view, a cone shape that deliniates what the camera sees.
		    	# user-height default is 0, when not in VR mode. In VR it is reset to approximate user height.
		    */}
		    <a-entity position="0 0 20">
		      <a-camera fov="45" user-height="0" />
		    </a-entity>

		    {/* Skysphere. */}
		    <a-entity geometry="primitive: sphere; radius: 600"
		              material="color: white"
		              scale="-1 -1 -1">
		    </a-entity>

		    {/* Lights. */}
				{/* x-axis rotation */}
		    <a-entity position="0 0 0">
		      <a-animation attribute="rotation" to="0 360 0"
		                   repeat="indefinite" easing="linear" dur="1096">
		      </a-animation>
		      <a-entity mixin="light" light="color: red" position="30 0 0"></a-entity>
		    </a-entity>
		  {/* y-axis rotation */}
	      <a-entity position="0 0 0">
	        <a-animation attribute="rotation" to="360 0 0"
	                     repeat="indefinite" easing="linear" dur="1096">
	        </a-animation>
	        <a-entity mixin="light" light="color: orange" position="0 0 40"></a-entity>
	      </a-entity>
			</a-scene>
		</div>
  )
}

export default Lights