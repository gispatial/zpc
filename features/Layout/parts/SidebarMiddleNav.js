import React from 'react';

import { SidebarMenu, Badge } from './../../../components';

/**
 * Here are the Sidebar Navigation entries.
 * In this starter most of them are missing a "to" property
 * which should normally point to specific routes.
 */
export const SidebarMiddleNav = () => (
    <SidebarMenu>
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-home"></i>}
            title="Starter"
            to="/"
        />
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-th"></i>}
            title={(
                <React.Fragment>
                    <span>Dashboard</span>
                    <Badge color="secondary">New</Badge>
                </React.Fragment>
            )}
        />
        { /* -------- Cards ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-clone"></i>}
            title="Authorization"
        >
            <SidebarMenu.Item title="Sign in" />
            <SidebarMenu.Item title="Sign up" />
        </SidebarMenu.Item>
        { /* -------- Layouts ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-columns"></i>}
            title="Campaign"
        >
            <SidebarMenu.Item title="Sign in" />
            <SidebarMenu.Item title="Campaign list" />
            <SidebarMenu.Item title="Campaign detail" />
            <SidebarMenu.Item title="Add campaign" />
            <SidebarMenu.Item title="Campaign donation plan list" />
        </SidebarMenu.Item>
        { /* -------- Interface ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-dollar"></i>}
            title="Branch(Wallet)"
        >
            <SidebarMenu.Item title="Charity branch list" />
            <SidebarMenu.Item title="Charity branch detail" />
            <SidebarMenu.Item title="Add charity branch" />
            <SidebarMenu.Item title="Update charity branch" />
        </SidebarMenu.Item>
        { /* -------- Graphs ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-pie-chart"></i>}
            title="Beneficiary"
        >
            <SidebarMenu.Item title="Beneficiary list" />
            <SidebarMenu.Item title="Beneficiary detail" />
            <SidebarMenu.Item title="Add beneficiary" />
            <SidebarMenu.Item title="Update beneficiary" />
            <SidebarMenu.Item title="Beneficiary category list" />
            <SidebarMenu.Item title="Update beneficiary category list" />
        </SidebarMenu.Item>
        { /* -------- Forms ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-check-square-o"></i>}
            noCaret
            title={(
                <React.Fragment>
                    <span>Donor</span>
                    <Badge color="theme" pill>34</Badge>
                </React.Fragment>
            )}
        >
            <SidebarMenu.Item title="Donation list" />
            <SidebarMenu.Item title="Add donation" />
            <SidebarMenu.Item title="Donor detail" />
            <SidebarMenu.Item title="Add donor" />
            <SidebarMenu.Item title="Update donor" />
            <SidebarMenu.Item title="Donor list" />
        </SidebarMenu.Item>
        { /* -------- Tables ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-trello"></i>}
            title="Fund Transfer"
        >
            <SidebarMenu.Item title="Campaign transfer list" />
            <SidebarMenu.Item title="Add campaign transfer" />
            <SidebarMenu.Item title="Charity branch transfer list" />
            <SidebarMenu.Item title="Add chairty branch transfer" />
            <SidebarMenu.Item title="Payment category list" />
        </SidebarMenu.Item>
        { /* -------- Apps ---------*/ }
        <SidebarMenu.Item
            icon={<i className="fa fa-fw fa-mouse-pointer"></i>}
            title="Settings Apps Configuration"
        >
            <SidebarMenu.Item title="User Management">
                <SidebarMenu.Item title="Update Profile" />
                <SidebarMenu.Item title="Transfer Donation" />
            </SidebarMenu.Item>
            <SidebarMenu.Item title="HR Management">
                <SidebarMenu.Item title="Update Profile" />
                <SidebarMenu.Item title="Payout" />
                <SidebarMenu.Item title="Finance" />
                <SidebarMenu.Item title="Add New Tasks" />
            </SidebarMenu.Item>
        </SidebarMenu.Item>
    </SidebarMenu >
);
