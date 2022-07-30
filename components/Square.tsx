export default function Square({size}: { size: number }) {
    return <div className={'square-container'}>
        <div className={'square'}>
            <div className='sq1'/>
            <div className='sq2'/>
            <div className='sq3'/>

        </div>
        <style jsx>{`
          .square-container {
            display: inline-block;
          }

          .square {
            display: flex;
            justify-content: center;
            align-items: center;
            width:  ${size * 3}rem;
            height: ${size * 3}rem;
            transition: transform .7s ease-in-out;
          }

          .square:hover {
            transform: rotate(90deg);
          }

          .sq1 {
            position: absolute;
            transform: rotate(45deg);
            width: ${size}rem;
            height: ${size}rem;
            background: #534f4f;
          }

          .sq2 {
            position: relative;
            transform: rotate(45deg) skew(45deg);
            left: ${size * 0.85}rem;
            bottom: ${size * 0.7}rem;
            width: ${size}rem;
            height: ${size / 2}rem;
            background: #333131;
          }

          .sq3 {
            position: relative;
            transform: rotate(-45deg) skew(-45deg);
            right: ${size * 0.85}rem;
            bottom: ${size * 0.7}rem;
            width: ${size}rem;
            height: ${size / 2}rem;
            background: #807979;
          }
        `}</style>
    </div>
}