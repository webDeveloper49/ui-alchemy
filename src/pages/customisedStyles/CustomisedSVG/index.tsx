import './index.scss';

const CustomisedSVG = () => {

  return (
    <div className='my-container'>
        <div className="svg-item">
            <svg id="svg1" viewBox="0 0 400 400">
                <path 
                    d={`
                        M 50 250 
                        L 180 120
                        H 250
                        V 200
                        L 350 300
                        V 350
                        H 50
                        Z
                    `}
                    stroke-width={"5px"}
                    fill={`var(--neon-electric-blue)`}
                    stroke={`var(--neon-bright-yellow)`}
                />
            </svg>
        </div>

        <svg id="svg2" viewBox="0 0 400 400" className="svg-item">
            <path 
                d={`
                    M 50 320
                    C 100 50, 300 50, 400 320
                `}
                stroke-width={"5px"}
                fill={`var(--neon-electric-blue)`}
                stroke={`var(--neon-bright-yellow)`}
            />
        </svg>

        <svg id="svg3" viewBox="0 0 400 400" className="svg-item">
            <path 
                d={`
                    M 50 320
                    Q 250 0, 450 320
                    T 280 320
                `}
                stroke-width={"5px"}
                fill={`var(--neon-electric-blue)`}
                stroke={`var(--neon-bright-yellow)`}
            />
        </svg>
      <svg id="svg4" className="svg-item" viewBox="0 0 200 200">
        <path 
            d={`
                M 50 100
                A 60 40 0 0 0 150 100
            `}
            className='my-path'
        />
        <path 
            d={`
                M 50 100
                A 60 40 0 0 1 150 100
            `}
            className='my-path'
        />
        <path 
            d={`
                M 50 100
                A 60 40 -20 1 1 150 100
            `}
            stroke={`var(--neon-pink)`}
            strokeWidth={2}
            fill={"none"}
        
        />
        <path 
            d={`
                M 50 100
                A 60 40 20 1 0 150 100
            `}
            stroke={`var(--neon-pink)`}
            strokeWidth={2}
            fill={"none"}
        
        />
      </svg>

      <div className="svg-item">
            <svg id="svg5" viewBox="0 0 400 400">
                <defs>
                    <linearGradient 
                        id="rect-lg-1" 
                        x1={"0%"} y1="0%"
                        x2={"10%"} y2="100%"
                        spreadMethod='reflect'
                        // gradientTransform='rotate(95)'
                    >
                        <stop offset="0%" stopColor={`red`}/>
                        <stop offset="100%" stopColor={`blue`}/>
                    </linearGradient>
                    <radialGradient
                        id="radial-grad-1"
                        cx="50%" cy="50%" 
                        r="100%" fx="50%" fy="50%"
                    >
                        <stop offset="0%" stopColor={`red`}/>
                        <stop offset="100%" stopColor={`blue`}/>
                    </radialGradient>
                    <pattern
                        id="pattern-1"
                        x="0" y="0"
                        width="20" height="20"
                        patternUnits="userSpaceOnUse"
                    >
                        <circle cx="10" cy="10" r="6" fill="brown"/>
                        <rect width="10" height="10" x="0" y="0" fill="brown"/>
                    </pattern>
                </defs>
                <rect 
                    width="200" height="100" 
                    stroke="blue"
                    x="100" y="50" 
                    rx="20" ry="20"
                    fill={"url(#pattern-1)"}
                />
                <circle
                    r="100"
                    cx="200" cy="250"
                    fill={"url(#radial-grad-1)"}
                />
            </svg>
        </div>
    </div>
  )
}

export default CustomisedSVG
