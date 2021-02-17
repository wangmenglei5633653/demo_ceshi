import React, { Component } from 'react';
import './table.css'

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { userId: '00000001', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
                { userId: '00000002', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
                { userId: '00000003', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
                // { userId: '00000004', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
                // { userId: '00000005', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
                // { userId: '00000006', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
                // { userId: '00000007', highest_edu_degree: '学士', age: 30, person_sex: 0, person_address: '北京', national: '汉', faced: '党员', email: '12345678765@qq.com' },
            ],
            rowsName: ['员工编号', '年龄', '性别', '籍贯', '民族', '政治面貌', '行内邮箱']
        }
    }
    componentDidMount() {

    }
    render() {
        let { rowsName } = this.state;
        let transObj = {
            '0': 'userId',
            '1': 'highest_edu_degree',
            '2': 'person_sex',
            '3': 'person_address',
            '4': 'national',
            '5': 'faced',
            '6': 'email',
        }
        return (
            <table className="mailTable" cellSpacing="0" cellPadding="0">
                {this.state.data.map((item, index) =>
                    <tr>
                        <td className="column">{rowsName[index]}</td>
                        {this.state.data.map(item => <td>{item[transObj[index]]}</td>)}
                    </tr>
                )}
            </table>
        );
    }
}

export default Table;