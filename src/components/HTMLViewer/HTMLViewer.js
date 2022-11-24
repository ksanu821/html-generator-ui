import Styles from './HTMLViewer.module.scss'
const HTMLViewer = (props)=>{
    const {htmlContent} =props
    return(
        <div className={Styles.container}>
            <iframe
                srcDoc={htmlContent}
                style={{margin:"0"}}
                title='output'
                sandbox='allow-scripts'
                frameBorder='0'
                width='100%'
                height='100%'
            />
        </div>
    )
}

export default HTMLViewer