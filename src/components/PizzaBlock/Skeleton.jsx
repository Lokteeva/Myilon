import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={450}
    viewBox="0 0 280 470"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="125" r="125" /> 
    <rect x="0" y="310" rx="5" ry="5" width="280" height="105" /> 
    <rect x="0" y="430" rx="5" ry="5" width="123" height="32" /> 
    <rect x="142" y="420" rx="25" ry="25" width="138" height="51" /> 
    <rect x="0" y="225" rx="0" ry="0" width="280" height="0" /> 
    <rect x="0" y="265" rx="5" ry="5" width="280" height="26" />
  </ContentLoader>
)

export default Skeleton