import React, { useRef, useEffect } from "react";
import "./queen.css";

const Queen = () => {
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  const fg1 = useRef(null);
  const fg2 = useRef(null);
  const redQueen = useRef(null);
  useEffect(() => {
    var sceneryFrames = [
      { transform: "translateX(100%)" },
      { transform: "translateX(-100%)" },
    ];

    var sceneryTimingBackground = {
      duration: 36000,
      iterations: Infinity,
    };

    var sceneryTimingForeground = {
      duration: 12000,
      iterations: Infinity,
    };
    var spriteFrames = [
      { transform: "translateY(0)" },
      { transform: "translateY(-100%)" },
    ];
    var bg1Animation = bg1.current.animate(
      sceneryFrames,
      sceneryTimingBackground
    );
    bg1Animation.currentTime =
      bg1Animation.effect.getTiming().duration / 2;

    var bg2Animation = bg2.current.animate(
      sceneryFrames,
      sceneryTimingBackground
    );
    var fg1Animation = fg1.current.animate(
      sceneryFrames,
      sceneryTimingForeground
    );
    fg1Animation.currentTime =
      fg1Animation.effect.getTiming().duration / 2;

    var fg2Animation = fg2.current.animate(
      sceneryFrames,
      sceneryTimingForeground
    );
    var redQueen_anim = redQueen.current.animate(spriteFrames, {
      easing: "steps(7, end)",
      direction: "reverse",
      duration: 500,
      playbackRate: 1,
      iterations: Infinity,
    });

    var animations = [
      fg1Animation,
      fg2Animation,
      bg1Animation,
      bg2Animation,
    ];

    var adjustBackgroundPlayback = () => {
      if (redQueen_anim.playbackRate < 0.8) {
        animations.forEach(function (anim) {
          anim.playbackRate = (redQueen_anim.playbackRate / 2) * -1;
        });
      } else if (redQueen_anim.playbackRate > 1.2) {
        animations.forEach((anim) => {
          anim.playbackRate = redQueen_anim.playbackRate / 2;
        });
      } else {
        animations.forEach((anim) => {
          anim.playbackRate = 0;
        });
      }
    };
    setInterval(function () {
     
      if (redQueen_anim.playbackRate > 0.4) {
        redQueen_anim.playbackRate *= 0.9;
      }
      adjustBackgroundPlayback();
    }, 3000);

    var goFaster = function () {
      /* But you can speed them up by giving the screen a click or a tap. */
      redQueen_anim.playbackRate *= 1.1;
      adjustBackgroundPlayback();
    };
    window.addEventListener("click", goFaster);
  });
  return (
    <div className="wrapper">
      <div className="sky"></div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img
            id="red-queen_and_alice_sprite"
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
            alt="Alice and the Red Queen running to stay in place."
            ref={redQueen}
          />
        </div>
      </div>

      <div className="scenery" id="fg1" ref={fg1}>
        <img
          id="palm3"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="fg2" ref={fg2}>
        <img
          id="bush"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png"
          alt=" "
        />
        <img
          id="w_rook_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="bg1" ref={bg1}>
        <img
          id="r_pawn_upright"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png"
          alt=" "
        />
        <img
          id="w_rook"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png"
          alt=" "
        />
        <img
          id="palm1"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png"
          alt=" "
        />
      </div>
      <div className="scenery" id="bg2" ref={bg2}>
        <img
          id="r_pawn"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png"
          alt=" "
        />

        <img
          id="r_knight"
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png"
          alt=" "
        />
      </div>
    </div>
  );
};
export default Queen;