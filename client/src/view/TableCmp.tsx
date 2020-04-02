import React from 'react';
import { Table } from 'react-bootstrap';

interface Header {
    header?: string;
    key: string;
}

interface IProps {
    headers: [Header],
    data: any
}
const Head: React.FC<IProps> = (props) => {
    let { headers } = props;
    return (
        <thead>
            <tr>
                {headers.map((head: Header) => (<><th>{head.header}</th></>))}
            </tr>
        </thead>
    );
}

const Row: React.FC<IProps> = (props) => {
    let { headers, data } = props;
    return (
        <>
            {
                data.map((val: any) => {
                    return (
                        <tr>
                            {
                                headers.map((header: Header) => {
                                    return <td>{val[header.key]}</td>;
                                })
                            }
                        </tr>
                    )
                })
            }
        </>

    )

}
const Body: React.FC<IProps> = (props) => {
    return (
        <tbody>
            <Row {...props} />
        </tbody>
    )
}

const TableCmp: React.FC<IProps> = (props) => {
    return (
        <Table>
            <Head {...props} />
            <Body {...props} />
        </Table>
    )

}

TableCmp.defaultProps = {
    headers: [{
        header: '',
        key: ''
    }],
    data: []
}
export default TableCmp;