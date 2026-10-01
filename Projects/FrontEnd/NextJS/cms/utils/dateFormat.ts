// const dateFormat = (date: Date | string) => new Date(date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

// export default dateFormat;


export const dateFormat = (date: Date | string) => {
    let tempDate;

    if (date instanceof Date) {
        tempDate = date;
    } else if (typeof date == "string") {
        tempDate = new Date(date)
    } else {
        return ""
    }

    return tempDate.toLocaleDateString(
        "en-IN", 
        { day: "numeric", month: "short", year: "numeric" }
    );
}