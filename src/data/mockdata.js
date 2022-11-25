export const insured_details=[
    {
        "id": 1,
        "lob": "loan",
        "attribute_id": "nominee_relationship",
        "display_name": "Nominee Relationship",
        "value": "nominee.relationship",
        "created_on": "2022-11-24T14:22:37.850556+05:30"
    },
    {
        "id": 2,
        "lob": "loan",
        "attribute_id": "name",
        "display_name": "Name",
        "value": "insured.name",
        "created_on": "2022-11-24T14:23:04.12565+05:30"
    },
    {
        "id": 3,
        "lob": "loan",
        "attribute_id": "gender",
        "display_name": "Gender",
        "value": "insured.gender",
        "created_on": "2022-11-24T14:23:16.993491+05:30"
    },
    {
        "id": 4,
        "lob": "loan",
        "attribute_id": "email",
        "display_name": "Email",
        "value": "insured.email",
        "created_on": "2022-11-24T14:23:29.326118+05:30"
    },
    {
        "id": 5,
        "lob": "loan",
        "attribute_id": "phone",
        "display_name": "Phone",
        "value": "insured.phone",
        "created_on": "2022-11-24T14:24:56.144946+05:30"
    },
    {
        "id": 6,
        "lob": "loan",
        "attribute_id": "age",
        "display_name": "Age",
        "value": "insured.age",
        "created_on": "2022-11-24T14:25:04.546152+05:30"
    },
    {
        "id": 7,
        "lob": "loan",
        "attribute_id": "loan_account_number",
        "display_name": "Loan A/C Number",
        "value": "loan.account_number",
        "created_on": "2022-11-24T14:25:39.52876+05:30"
    },
    {
        "id": 8,
        "lob": "loan",
        "attribute_id": "loan_tenure",
        "display_name": "Loan Tenure",
        "value": "loan.tenure_in_months",
        "created_on": "2022-11-24T14:26:03.509481+05:30"
    },
    {
        "id": 9,
        "lob": "loan",
        "attribute_id": "loan_emi",
        "display_name": "Loan EMI",
        "value": "loan.emi",
        "created_on": "2022-11-24T14:26:31.127696+05:30"
    },
    {
        "id": 10,
        "lob": "loan",
        "attribute_id": "loan_amount",
        "display_name": "Loan Amount",
        "value": "loan.amount",
        "created_on": "2022-11-24T14:27:05.045826+05:30"
    },
    {
        "id": 11,
        "lob": "loan",
        "attribute_id": "loan_disbursement_date",
        "display_name": "Loan Disbursement Date",
        "value": "loan.disbursement_date",
        "created_on": "2022-11-24T14:27:27.195786+05:30"
    },
    {
        "id": 12,
        "lob": "loan",
        "attribute_id": "nominee_name",
        "display_name": "Nominee Name",
        "value": "nominee.name",
        "created_on": "2022-11-24T14:27:57.295462+05:30"
    }
]

export const cover_details =[{
    "id": 4,
    "cover_id": "plan_c",
    "link": "https://",
    "created_on": "2022-11-24T22:07:40.45002+05:30",
    "display_name": "PLAN A"
},
{
    "id": 5,
    "cover_id": "plan_new",
    "link": "https://ancnicn.png",
    "created_on": "2022-11-25T01:49:41.335137+05:30",
    "display_name": "New Plan"
},
{
    "id": 6,
    "cover_id": "plan_new1",
    "link": "https://ancnicn.png",
    "created_on": "2022-11-25T01:49:50.154002+05:30",
    "display_name": "New Plan 1"
}
]

export const getTemplateList =[
    {
        "id": 1,
        "user_id": "123",
        "lob": "loan",
        "template_name": "coi-template",
        "partner_details": "<td style=\"width:35%;vertical-align:top\"><p style=\"margin:0 0 5px 0;font-size:12px\"><b>Group Administrator :<br>name</b></p><p style=\"margin:0 0 10px 0;font-size:12px;line-height:1.5;color:#8a8a8a\">address</p><div><label style=\"margin:0;font-size:12px;color:#8a8a8a;border-top:2px solid #ddd;padding:5px 0 2px 0;display:block\">Master Policy No.:<span style=\"color:#000\">{{master_policy.number}}</span></label></div></td>",
        "coverage_details": "",
        "insured_details": "",
        "created_on": "2022-11-24T17:52:23.589+05:30"
    },
    {
        "id": 5,
        "user_id": "123",
        "lob": "loan",
        "template_name": "loan_two",
        "partner_details": "<td style=\"width:35%;vertical-align:top\"><p style=\"margin:0 0 5px 0;font-size:12px\"><b>Group Administrator :<br>new Partner</b></p><p style=\"margin:0 0 10px 0;font-size:12px;line-height:1.5;color:#8a8a8a\">new Address</p><div><label style=\"margin:0;font-size:12px;color:#8a8a8a;border-top:2px solid #ddd;padding:5px 0 2px 0;display:block\">Master Policy No.:<span style=\"color:#000\">{{master_policy.number}}</span></label></div></td>",
        "coverage_details": "",
        "insured_details": "",
        "created_on": "2022-11-24T21:46:32.699+05:30"
    }]

export const templateMock = {
        "templateHistory": {
            "id": 4,
            "template_name": "jbvriubve",
            "lob": "loan",
            "partner_details_request": "{\"template_name\":\"jbvriubve\",\"lob\":\"loan\",\"partner_details\":{\"partner_name\":\"evervebeb\",\"partner_address\":\"erbqtrwhrwhwrhwnbrbtnrtwrs\"},\"insured_details_list\":null,\"coverage_details_list\":null}",
            "coverage_details_request": "{\"template_name\":\"jbvriubve\",\"lob\":\"loan\",\"partner_details\":null,\"insured_details_list\":null,\"coverage_details_list\":[{\"display_name\":\"Hospital Daily Allowance\",\"link\":\"https://www.acko.com/static/images/rapido/hospitalization_daily_allowance_1x.png\",\"description\":\"ebriuveiubeiuvbiru\",\"sub_description\":\"ruigfevuig\"}]}",
            "insured_details_request": "{\"template_name\":\"jbvriubve\",\"lob\":\"loan\",\"partner_details\":null,\"insured_details_list\":[{\"name\":\"Nominee Relationship\",\"display_name\":\"Nominee Relationship\",\"value\":\"nominee.relationship\"}],\"coverage_details_list\":null}",
            "created_on": "2022-11-25T03:40:24.832+05:30"
        },
        "htmlContent": "<!DOCTYPE html><html><head><title></title><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><link href=\"https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800\" rel=\"stylesheet\"><style>body,html{font-family:Montserrat,sans-serif!important;margin:0 auto!important;height:100%!important;width:100%!important}.wrapper{width:909px;display:block}p{font-size:14px}</style></head><body style=\"padding:0;margin:0\"><div class=\"wrapper\"><div><table style=\"border-collapse:collapse;width:100%;border:0;margin-bottom:20px\"><tbody><tr><td style=\"width:65%;vertical-align:top\"><img src=\"https://www.acko.com/static/images/Acko_Logo_Pale.png\" style=\"height:30px;margin:0\"><p style=\"margin:0;font-size:11px;line-height:1.3;color:#4a4a4a\">Acko Group Health<br>Insurance Policy</p></td><td style=\"width:35%;vertical-align:top\"><p style=\"margin:0 0 5px 0;font-size:12px\"><b>Group Administrator :<br>evervebeb</b></p><p style=\"margin:0 0 10px 0;font-size:12px;line-height:1.5;color:#8a8a8a\">erbqtrwhrwhwrhwnbrbtnrtwrs</p><div><label style=\"margin:0;font-size:12px;color:#8a8a8a;border-top:2px solid #ddd;padding:5px 0 2px 0;display:block\">Master Policy No.:<span style=\"color:#000\">{{master_policy.number}}</span></label></div></td></tr></tbody></table><div style=\"min-height:940px\"><div style=\"width:100%;display:block;margin-top:40px\"><h1 style=\"font-weight:600;margin:5px 0;font-size:35px\">Acko Group Health Insurance Policy</h1></div><div style=\"width:100%;display:block\"><h2 style=\"font-weight:400;margin:10px 0;font-size:25px;line-height:1.5\">Your insurance policy is valid from {{policy_start_date}} to {{policy_end_date}}.</h2></div><div"

}