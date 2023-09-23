import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

import homeStyle from '@santech/styles/home.module.css'
import IconButton from '@mui/material/IconButton';


export default function Footer() {
    return(
        <>
            <section color='primary' className={`grid grid-cols-3 ${homeStyle.footerContainer}`}>
                <section className="grid grid-rows-1 grid-cols-1 gap-4 justify-items-center items-center">
                    <span className="font-bold"></span>
                </section>
                <section className="grid grid-rows-1 grid-cols-1 gap-4">
                <div className="grid grid-rows-1 grid-cols-1 justify-items-center items-center">
                    <div className="font-bold">
                        Follow me on,
                    </div>
                    <div>
                    <IconButton
                            size="large"
                            aria-label="Twitter"
                            color="inherit"
                            >
                            <Twitter />
                            </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Facebook"
                            color="inherit"
                            >
                            <Facebook />
                            </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Instagram"
                            color="inherit"
                            >
                            <Instagram />
                        </IconButton>
                    </div>
                </div>
                </section>
                <section className="grid grid-rows-1 grid-cols-2 gap-4">
                <div className="cols-span-1"></div>
                <div className="col-span-1 grid justify-center">
                    <div className="grid grid-cols-3 justify-items-end">
                        {/* <IconButton
                            size="large"
                            aria-label="Twitter"
                            color="inherit"
                            >
                            <Twitter />
                            </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Facebook"
                            color="inherit"
                            >
                            <Facebook />
                            </IconButton>
                        <IconButton
                            size="large"
                            aria-label="Instagram"
                            color="inherit"
                            >
                            <Instagram />
                        </IconButton> */}
                    </div>
                </div>
                </section>
            </section>
        </>
    )
}