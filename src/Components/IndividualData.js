import React from 'react'

export const IndividualData = ({individualExcelData}) => {
    return (
        <>
            <th>{individualExcelData.Number}</th>
            <th>{individualExcelData.ActiveInBalance}</th>
            <th>{individualExcelData.PassiveInBalance}</th>
            <th>{individualExcelData.TurnoverDebet}</th>
            <th>{individualExcelData.TurnoverCredit}</th>
            <th>{individualExcelData.ActiveOutBalance}</th>
            <th>{individualExcelData.PassiveOutBalance}</th>
        </>
    )
}
