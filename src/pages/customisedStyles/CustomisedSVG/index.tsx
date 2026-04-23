import './index.scss';

const CustomisedSVG = () => {

  return (
    <div className='my-container'>
        <svg id="svg1" viewBox="0 0 400 400" className="svg-item">
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
      <svg className="svg-item" viewBox="0 0 200 200">
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
    </div>
  )
}

export default CustomisedSVG
