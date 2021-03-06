import React from 'react';
import moment from 'moment';

import {
    Button,
    Sidebar,
    UncontrolledPopover,
    PopoverBody,
} from './../../../components';

const FooterText = () => (
	<React.Fragment>
		&copy; { moment().format('YYYY') } All Rights Reserved.{' '}
        This project was built with Bootstrap 4 and Next/ React.{' '}
		Designed and implemented by{' '}
		<a
			href="https://github.com/gispatial"
			target="_blank"
			rel="noopener noreferrer"
			className="sidebar__link"
		>
			JustEd@Github
		</a>
	</React.Fragment>
);

const SidebarBottom = () => (
    <React.Fragment>
        { /* START Sidebar BOTTOM: B */ }
        <Sidebar.Section>
            { /* START DESKTOP View */ }
            <Sidebar.HideSlim>
                <p className='small text-muted'>
                    <FooterText />
                </p>
            </Sidebar.HideSlim>
            { /* END DESKTOP View */ }
            { /* START SLIM Only View */ }
            <Sidebar.ShowSlim>
                <div className="text-center">
                    <Button
                        color="link"
                        id="UncontrolledSidebarPopoverFooter"
                        className="sidebar__link p-0"
                    >
                        <i className="fa fa-fw fa-question-circle-o" />
                    </Button>
                    <UncontrolledPopover placement="left-end" target="UncontrolledSidebarPopoverFooter">
                        <PopoverBody>
                            <FooterText />
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </Sidebar.ShowSlim>
            { /* END SLIM Only View */ }
        </Sidebar.Section>
        { /* END Sidebar BOTTOM: B */ }
    </React.Fragment>
)

export { SidebarBottom };
